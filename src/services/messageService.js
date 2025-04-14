import { collection, addDoc, query, where, getDocs, orderBy } from 'firebase/firestore';
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
      timestamp: new Date().toISOString(),
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