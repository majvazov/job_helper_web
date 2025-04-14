import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { db } from '../firebase/config';
import { collection, query, where, addDoc, onSnapshot, Timestamp as FirebaseTimestamp, getDocs, orderBy, doc, updateDoc } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import { useNotifications } from '../context/NotificationContext';

const MessageBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f8f9fa;
  width: 100%; /* Ensure full width */
  overflow-x: hidden; /* Prevent horizontal scrolling */
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%; /* Prevent overflow */
  }
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden; /* Prevent horizontal scrolling */
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #aaa;
  }
`;

const MessageBubble = styled.div`
  max-width: 75%;
  padding: 0.8rem 1rem;
  border-radius: 18px;
  position: relative;
  margin: 0.25rem 0;
  word-break: break-word;
  
  ${props => props.$isSender ? `
    align-self: flex-end;
    background: linear-gradient(135deg, var(--primary), var(--primary-dark, #005a87));
    color: white;
    border-bottom-right-radius: 4px;
  ` : `
    align-self: flex-start;
    background-color: white;
    color: black;
    border: 1px solid #e0e0e0;
    border-bottom-left-radius: 4px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  `}
  
  @media (max-width: 768px) {
    max-width: 85%;
  }
`;

const MessageTime = styled.div`
  font-size: 0.7rem;
  margin-top: 0.25rem;
  text-align: ${props => props.$isSender ? 'right' : 'left'};
  color: ${props => props.$isSender ? 'rgba(255,255,255,0.8)' : '#aaa'};
`;

const InputContainer = styled.div`
  display: flex;
  padding: 1rem;
  background-color: white;
  border-top: 1px solid #eee;
  align-items: center;
  position: relative;
`;

const MessageInput = styled.textarea`
  flex: 1;
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 24px;
  font-size: 1rem;
  resize: none;
  min-height: 20px;
  max-height: 120px;
  line-height: 1.4;
  outline: none;
  font-family: inherit;
  
  &:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.2);
  }
  
  &::placeholder {
    color: #aaa;
  }
`;

const SendButton = styled.button`
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: var(--primary-dark, #005a87);
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

const DateDivider = styled.div`
  text-align: center;
  color: #888;
  font-size: 0.8rem;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:before, &:after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #ddd;
  }
  
  &:before {
    margin-right: 10px;
  }
  
  &:after {
    margin-left: 10px;
  }
`;

const ApplicationInfo = styled.div`
  background-color: rgba(var(--primary-rgb), 0.1);
  border: 1px solid rgba(var(--primary-rgb), 0.2);
  padding: 0.8rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const JobTitle = styled.div`
  font-weight: bold;
  margin-bottom: 0.3rem;
`;

const CompanyName = styled.div`
  color: #666;
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const MessageBox = ({ applicationId, senderId, receiverId }) => {
  const { currentUser } = useAuth();
  const { refreshUnreadCount } = useNotifications();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef(null);
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
  const [userScrolled, setUserScrolled] = useState(false);

  // Only auto-scroll when new messages arrive if the user hasn't scrolled manually
  // or when the component initially loads
  const scrollToBottom = () => {
    if (!userScrolled || !hasScrolledToBottom) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      setHasScrolledToBottom(true);
    }
  };

  // Handle user scroll events
  const handleScroll = (e) => {
    // If the user scrolls up, mark that they've manually scrolled
    if (e.target.scrollTop < e.target.scrollHeight - e.target.clientHeight - 10) {
      setUserScrolled(true);
    }
    
    // If the user scrolls to the bottom, reset the userScrolled flag
    if (e.target.scrollTop >= e.target.scrollHeight - e.target.clientHeight - 10) {
      setUserScrolled(false);
    }
  };

  // Scroll to bottom when messages change, but respect user scrolling
  useEffect(() => {
    scrollToBottom();
  }, [messages.length]); // Only react to message count changes

  useEffect(() => {
    if (!applicationId || !currentUser?.uid) {
      console.error('Missing required parameters for MessageBox');
      return;
    }

    console.log(`MessageBox initialized with: appId=${applicationId}, sender=${senderId}, receiver=${receiverId}`);

    // Function to directly mark messages as read in Firestore
    const markMessagesAsReadDirectly = async () => {
      try {
        // Get all unread messages where current user is the receiver
        const messagesRef = collection(db, 'messages');
        const q = query(
          messagesRef,
          where('applicationId', '==', applicationId),
          where('receiverId', '==', currentUser.uid),
          where('read', '==', false)
        );

        const unreadSnapshot = await getDocs(q);
        console.log(`Found ${unreadSnapshot.docs.length} unread messages to mark as read`);

        if (unreadSnapshot.docs.length === 0) return;

        // Update each unread message directly
        const updatePromises = unreadSnapshot.docs.map(docSnapshot => {
          return updateDoc(doc(db, 'messages', docSnapshot.id), { read: true });
        });

        await Promise.all(updatePromises);
        console.log('Successfully marked messages as read directly');

        // Force refresh the unread message count
        if (refreshUnreadCount) {
          refreshUnreadCount(currentUser.uid);
        }
      } catch (error) {
        console.error('Error marking messages as read directly:', error);
      }
    };

    // Fetch messages initially
    const fetchMessages = async () => {
      try {
        console.log('Fetching messages for application:', applicationId);
        const messagesRef = collection(db, 'messages');
        const q = query(
          messagesRef,
          where('applicationId', '==', applicationId),
          orderBy('timestamp', 'asc')
        );
        
        const snapshot = await getDocs(q);
        const fetchedMessages = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        console.log(`Fetched ${fetchedMessages.length} messages, marking as read now...`);
        setMessages(fetchedMessages);
        
        // Mark messages as read immediately when loaded
        await markMessagesAsReadDirectly();
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();

    // Set up real-time listener for new messages
    const messagesRef = collection(db, 'messages');
    const q = query(
      messagesRef,
      where('applicationId', '==', applicationId),
      orderBy('timestamp', 'asc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      console.log('Real-time message update received');
      const newMessages = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      setMessages(newMessages.sort((a, b) => a.timestamp.seconds - b.timestamp.seconds));
      
      // Check if there are any new unread messages for current user
      const hasNewUnreadMessages = newMessages.some(
        msg => msg.receiverId === currentUser.uid && !msg.read
      );
      
      if (hasNewUnreadMessages) {
        console.log('New unread messages detected, marking as read...');
        markMessagesAsReadDirectly();
      }
    }, (error) => {
      console.error('Error in messages listener:', error);
    });

    return () => unsubscribe();
  }, [applicationId, currentUser, refreshUnreadCount, senderId, receiverId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    setSending(true);
    try {
      const messageData = {
        applicationId,
        senderId,
        receiverId,
        content: newMessage.trim(),
        timestamp: FirebaseTimestamp.now(),
        read: false
      };

      await addDoc(collection(db, 'messages'), messageData);
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setSending(false);
    }
  };

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return '';
    
    // Convert Firestore Timestamp to JavaScript Date if needed
    let date;
    if (timestamp instanceof FirebaseTimestamp) {
      date = timestamp.toDate();
    } else if (timestamp.seconds) {
      // Handle raw Firestore timestamp object
      date = new Date(timestamp.seconds * 1000);
    } else if (timestamp instanceof Date) {
      date = timestamp;
    } else {
      date = new Date(timestamp);
    }
    
    return date.toLocaleString();
  };

  return (
    <MessageBoxContainer>
      <MessagesContainer onScroll={handleScroll}>
        {messages.map(message => (
          <MessageBubble key={message.id} $isSender={message.senderId === senderId}>
            {message.content}
            <MessageTime $isSender={message.senderId === senderId}>
              {formatTimestamp(message.timestamp)}
            </MessageTime>
          </MessageBubble>
        ))}
        <div ref={messagesEndRef} />
      </MessagesContainer>
      <InputContainer>
        <MessageInput
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          disabled={sending}
        />
        <SendButton onClick={handleSubmit} disabled={sending || !newMessage.trim()}>
          {sending ? 'Sending...' : 'Send'}
        </SendButton>
      </InputContainer>
    </MessageBoxContainer>
  );
};

export default MessageBox;