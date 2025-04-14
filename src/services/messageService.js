import { collection, addDoc, query, where, getDocs, orderBy, or, Timestamp, updateDoc, doc, writeBatch } from 'firebase/firestore';
import { db } from '../firebase/config';

// Send a message
export const sendMessage = async (senderId, receiverId, applicationId, content) => {
  try {
    const messagesRef = collection(db, 'messages');
    const message = {
      senderId,
      receiverId,
      applicationId,
      content,
      timestamp: Timestamp.now(),
      read: false
    };
    
    const docRef = await addDoc(messagesRef, message);
    return { id: docRef.id, ...message };
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};

// Get messages for a specific application
export const getApplicationMessages = async (applicationId) => {
  try {
    const messagesRef = collection(db, 'messages');
    const q = query(
      messagesRef, 
      where('applicationId', '==', applicationId),
      orderBy('timestamp', 'asc')
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting messages:', error);
    return [];
  }
};

// Get all conversations for a user (either as sender or receiver)
export const getUserConversations = async (userId) => {
  try {
    console.log(`Getting conversations for user: ${userId}`);
    
    // First try without orderBy (fallback for missing indexes)
    try {
      const messagesRef = collection(db, 'messages');
      const q = query(
        messagesRef,
        or(
          where('senderId', '==', userId),
          where('receiverId', '==', userId)
        )
      );
      
      const querySnapshot = await getDocs(q);
      const messages = querySnapshot.docs.map(doc => {
        const data = doc.data();
        // Properly convert Firestore timestamp to JavaScript Date
        const timestamp = data.timestamp instanceof Timestamp 
          ? data.timestamp
          : (data.timestamp?.seconds ? new Timestamp(data.timestamp.seconds, data.timestamp.nanoseconds || 0) : null);
        
        return {
          id: doc.id,
          ...data,
          timestamp: timestamp  // Keep as Timestamp object for consistent handling
        };
      });
      
      console.log(`Found ${messages.length} messages for user ${userId} (without ordering)`);
      
      // Manually sort messages by timestamp if the query works
      messages.sort((a, b) => {
        const timeA = a.timestamp?.toMillis ? a.timestamp.toMillis() : 0;
        const timeB = b.timestamp?.toMillis ? b.timestamp.toMillis() : 0;
        return timeB - timeA; // descending order
      });
      
      // Group messages by conversation (unique combinations of users)
      const conversations = {};
      
      // First pass: Set up conversation objects with latest messages
      messages.forEach(message => {
        const otherUserId = message.senderId === userId ? message.receiverId : message.senderId;
        const conversationKey = `${message.applicationId || 'default'}-${otherUserId}`;
        
        // Use the toMillis method for consistent timestamp comparison
        const messageTime = message.timestamp?.toMillis ? message.timestamp.toMillis() : 0;
        const existingTime = conversations[conversationKey]?.timestamp?.toMillis ? 
          conversations[conversationKey].timestamp.toMillis() : 0;
        
        if (!conversations[conversationKey] || messageTime > existingTime) {
          conversations[conversationKey] = {
            ...message,
            otherUserId,
            unread: 0 // Initialize unread count to 0, we'll calculate it next
          };
        }
      });
      
      // Second pass: Calculate unread counts for each conversation
      messages.forEach(message => {
        if (message.receiverId === userId && !message.read) {
          const otherUserId = message.senderId; // In unread messages, other user is always the sender
          const conversationKey = `${message.applicationId || 'default'}-${otherUserId}`;
          
          if (conversations[conversationKey]) {
            conversations[conversationKey].unread = (conversations[conversationKey].unread || 0) + 1;
          }
        }
      });
      
      const result = Object.values(conversations);
      console.log(`Processed into ${result.length} conversations`);
      result.forEach((conv, i) => {
        console.log(`Conversation ${i+1}: ${conv.otherUserId}, unread: ${conv.unread}, read status: ${conv.read}`);
      });
      
      return result;
    } catch (error) {
      console.error('Error getting conversations (trying without orderBy):', error);
      // If the fallback fails, we'll try the original query below
    }
    
    // Original implementation with orderBy (requires proper indexes)
    const messagesRef = collection(db, 'messages');
    const q = query(
      messagesRef,
      or(
        where('senderId', '==', userId),
        where('receiverId', '==', userId)
      ),
      orderBy('timestamp', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    const messages = querySnapshot.docs.map(doc => {
      const data = doc.data();
      // Properly convert Firestore timestamp to JavaScript Date
      const timestamp = data.timestamp instanceof Timestamp 
        ? data.timestamp 
        : (data.timestamp?.seconds ? new Timestamp(data.timestamp.seconds, data.timestamp.nanoseconds || 0) : null);
      
      return {
        id: doc.id,
        ...data,
        timestamp: timestamp
      };
    });
    
    console.log('Raw messages from Firestore:', messages.length);
    
    // Group messages by conversation (unique combinations of users)
    const conversations = {};
    
    messages.forEach(message => {
      const otherUserId = message.senderId === userId ? message.receiverId : message.senderId;
      const conversationKey = `${message.applicationId || 'default'}-${otherUserId}`;
      
      // Use the toMillis method for consistent timestamp comparison
      const messageTime = message.timestamp?.toMillis ? message.timestamp.toMillis() : 0;
      const existingTime = conversations[conversationKey]?.timestamp?.toMillis ? 
        conversations[conversationKey].timestamp.toMillis() : 0;
      
      if (!conversations[conversationKey] || messageTime > existingTime) {
        conversations[conversationKey] = {
          ...message,
          otherUserId,
          unread: 0 // Initialize unread count to 0, we'll calculate it next
        };
      }
    });
    
    // Second pass: Calculate unread counts for each conversation
    messages.forEach(message => {
      if (message.receiverId === userId && !message.read) {
        const otherUserId = message.senderId; // In unread messages, other user is always the sender
        const conversationKey = `${message.applicationId || 'default'}-${otherUserId}`;
        
        if (conversations[conversationKey]) {
          conversations[conversationKey].unread = (conversations[conversationKey].unread || 0) + 1;
        }
      }
    });
    
    const result = Object.values(conversations);
    console.log('Processed conversations:', result.length);
    return result;
  } catch (error) {
    console.error('Error getting user conversations:', error);
    return [];
  }
};

// Mark messages as read
export const markMessagesAsRead = async (userId, otherUserId, applicationId) => {
  try {
    console.log(`Marking messages as read - userId: ${userId}, otherUserId: ${otherUserId}, applicationId: ${applicationId}`);
    
    const messagesRef = collection(db, 'messages');
    const q = query(
      messagesRef,
      where('senderId', '==', otherUserId),
      where('receiverId', '==', userId),
      where('applicationId', '==', applicationId),
      where('read', '==', false)
    );
    
    const querySnapshot = await getDocs(q);
    console.log(`Found ${querySnapshot.size} unread messages to mark as read`);
    
    if (querySnapshot.size === 0) {
      return true; // No messages to update
    }
    
    // Update each document individually instead of using batch
    const updatePromises = querySnapshot.docs.map(async (docSnapshot) => {
      const docRef = doc(db, 'messages', docSnapshot.id);
      return updateDoc(docRef, { read: true });
    });
    
    await Promise.all(updatePromises);
    console.log('Successfully marked messages as read');
    return true;
  } catch (error) {
    console.error('Error marking messages as read:', error);
    return false;
  }
};