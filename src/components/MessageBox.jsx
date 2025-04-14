import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { db } from '../firebase/config';
import { collection, query, where, addDoc, onSnapshot, Timestamp, getDocs, orderBy } from 'firebase/firestore';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Message = styled.div`
  padding: 0.8rem;
  border-radius: 8px;
  max-width: 80%;
  word-wrap: break-word;
  ${props => props.$isSender ? `
    background-color: var(--primary);
    color: white;
    align-self: flex-end;
  ` : `
    background-color: #f0f0f0;
    align-self: flex-start;
  `}
`;

const MessageTime = styled.span`
  font-size: 0.8rem;
  color: ${props => props.$isSender ? 'rgba(255, 255, 255, 0.8)' : '#666'};
  display: block;
  margin-top: 0.3rem;
`;

const InputContainer = styled.form`
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
  border-top: 1px solid #ddd;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const SendButton = styled.button`
  background-color: var(--primary);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background-color: #1a4314;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const MessageBox = ({ applicationId, senderId, receiverId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!applicationId) {
      console.error('No applicationId provided');
      return;
    }

    // Fetch messages initially
    const fetchMessages = async () => {
      try {
        const messagesRef = collection(db, 'messages');
        const q = query(
          messagesRef,
          where('applicationId', '==', applicationId),
          orderBy('timestamp', 'asc')
        );
        
        try {
          const snapshot = await getDocs(q);
          const fetchedMessages = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setMessages(fetchedMessages.sort((a, b) => a.timestamp.seconds - b.timestamp.seconds));
        } catch (error) {
          if (error.code === 'failed-precondition') {
            console.error('This query requires an index. Please create it in the Firebase Console.');
          }
        }
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
      const newMessages = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMessages(newMessages.sort((a, b) => a.timestamp.seconds - b.timestamp.seconds));
    }, (error) => {
      if (error.code === 'failed-precondition') {
        console.error('This query requires an index. Please create it in the Firebase Console.');
      } else {
        console.error('Error in messages listener:', error);
      }
    });

    return () => unsubscribe();
  }, [applicationId]);

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
        timestamp: Timestamp.now(),
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
    return new Date(timestamp.seconds * 1000).toLocaleString();
  };

  return (
    <Container>
      <MessagesContainer>
        {messages.map(message => (
          <Message key={message.id} $isSender={message.senderId === senderId}>
            {message.content}
            <MessageTime $isSender={message.senderId === senderId}>
              {formatTimestamp(message.timestamp)}
            </MessageTime>
          </Message>
        ))}
        <div ref={messagesEndRef} />
      </MessagesContainer>
      <InputContainer onSubmit={handleSubmit}>
        <Input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          disabled={sending}
        />
        <SendButton type="submit" disabled={sending || !newMessage.trim()}>
          {sending ? 'Sending...' : 'Send'}
        </SendButton>
      </InputContainer>
    </Container>
  );
};

export default MessageBox; 