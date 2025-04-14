import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getUserConversations, markMessagesAsRead } from '../services/messageService';
import { useAuth } from '../context/AuthContext';
import { useNotifications } from '../context/NotificationContext';
import MessageBox from './MessageBox';
import { getUserById } from '../services/userService';
import { Timestamp as FirebaseTimestamp } from 'firebase/firestore';
import { getApplicationById } from '../services/applicationService';
import { Link } from 'react-router-dom';

const MessengerContainer = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid #eaeaea;
  
  @media (max-width: 768px) {
    border-radius: 0;
    box-shadow: none;
    border: none;
    margin: 0;
    height: calc(100vh - 110px);
    display: flex;
    flex-direction: column;
    width: 100%; /* Use 100% instead of viewport units */
    max-width: 100%; /* Ensure no overflow */
    overflow-x: hidden; /* Prevent horizontal scrolling */
  }
`;

const MessengerHeader = styled.div`
  background: linear-gradient(to right, var(--primary), var(--primary-dark, #005a87));
  color: white;
  padding: 1rem 1.5rem;
  font-weight: bold;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

const ProfileButton = styled(Link)`
  color: white;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const ConversationList = styled.div`
  padding: 0;
  border-right: 1px solid #eee;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    display: ${props => props.$hideOnMobile ? 'none' : 'block'};
  }
`;

const ConversationItem = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: ${props => props.$active ? '#f4f6f8' : props.$unread ? '#f0f7ff' : 'white'};
  
  &:hover {
    background-color: #f4f6f8;
  }
`;

const UserAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  color: #666;
`;

const ConversationDetails = styled.div`
  flex: 1;
`;

const ConversationName = styled.div`
  font-weight: ${props => props.$unread ? 'bold' : 'normal'};
  margin-bottom: 0.3rem;
`;

const LastMessage = styled.div`
  font-size: 0.9rem;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
`;

const UnreadBadge = styled.div`
  background-color: var(--primary);
  color: white;
  border-radius: 50%;
  min-width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
`;

const MessengerLayout = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  height: 70vh;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    height: 100%; /* Take full height of container */
    flex: 1; /* Allow container to expand */
  }
`;

const NoConversation = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: #666;
  font-style: italic;
`;

const Timestamp = styled.div`
  font-size: 0.75rem;
  color: #999;
  margin-top: 0.3rem;
`;

const MessageBoxContainer = styled.div`
  height: 100%;
  overflow: hidden;
  
  @media (max-width: 768px) {
    flex: 1; /* Allow container to expand */
  }
`;

const ApplicationInfo = styled.div`
  font-size: 0.75rem;
  color: #666;
  margin-top: 0.2rem;
`;

const BackButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  display: none;
  align-items: center;
  gap: 5px;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  
  @media (max-width: 768px) {
    display: ${props => props.$show ? 'flex' : 'none'};
  }
`;

const MessageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border-bottom: 1px solid #eee;
  background-color: #f8f9fa;

  @media (min-width: 769px) {
    display: none;
  }
  
  h3 {
    margin: 0;
    font-size: 1rem;
  }
`;

const Messenger = () => {
  const { currentUser } = useAuth();
  const { refreshUnreadCount } = useNotifications();
  const [conversations, setConversations] = useState([]);
  const [users, setUsers] = useState({});
  const [applications, setApplications] = useState({});
  const [loading, setLoading] = useState(true);
  const [activeConversation, setActiveConversation] = useState(null);
  const [showConversationList, setShowConversationList] = useState(true);
  
  const fetchConversations = async () => {
    if (!currentUser?.uid) return;
    
    try {
      setLoading(true);
      console.log("Fetching conversations for user:", currentUser.uid);
      
      const conversationsData = await getUserConversations(currentUser.uid);
      setConversations(conversationsData);
      
      // Fetch user details for all conversations
      const userIds = [...new Set(conversationsData.map(conv => conv.otherUserId))];
      const userDataPromises = userIds.map(async (userId) => {
        const userData = await getUserById(userId);
        return { [userId]: userData };
      });
      
      // Fetch application details for each conversation
      const appIds = [...new Set(conversationsData
        .map(conv => conv.applicationId)
        .filter(id => id && id !== 'default'))];
      
      const appDataPromises = appIds.map(async (appId) => {
        try {
          const appData = await getApplicationById(appId);
          return { [appId]: appData };
        } catch (error) {
          console.error(`Error fetching application ${appId}:`, error);
          return { [appId]: null };
        }
      });
      
      const [usersResults, appsResults] = await Promise.all([
        Promise.all(userDataPromises),
        Promise.all(appDataPromises)
      ]);
      
      const usersMap = usersResults.reduce((acc, curr) => ({ ...acc, ...curr }), {});
      const appsMap = appsResults.reduce((acc, curr) => ({ ...acc, ...curr }), {});
      
      setUsers(usersMap);
      setApplications(appsMap);

      // Refresh the notification count after loading conversations
      if (currentUser?.uid) {
        refreshUnreadCount(currentUser.uid);
      }
    } catch (error) {
      console.error('Error fetching conversations:', error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchConversations();
    
    // Set up a refresh interval for conversations (every 30s)
    const interval = setInterval(() => {
      fetchConversations();
    }, 30000);
    
    return () => clearInterval(interval);
  }, [currentUser]);
  
  const handleConversationClick = async (conversation) => {
    setActiveConversation(conversation);
    
    // On mobile, hide the conversation list when a conversation is selected
    if (window.innerWidth <= 768) {
      setShowConversationList(false);
    }
    
    // Mark messages as read
    if (conversation.unread > 0) {
      await markMessagesAsRead(
        currentUser.uid, 
        conversation.otherUserId, 
        conversation.applicationId
      );
      
      // Update local state
      setConversations(conversations.map(conv => {
        if (conv.id === conversation.id) {
          return { ...conv, unread: 0 };
        }
        return conv;
      }));
      
      // Refresh the unread count after marking messages as read
      refreshUnreadCount(currentUser.uid);
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
    
    const now = new Date();
    
    // If today, show time only
    if (date.toDateString() === now.toDateString()) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    
    // If this year, show month and day
    if (date.getFullYear() === now.getFullYear()) {
      return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
    }
    
    // Otherwise show full date
    return date.toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' });
  };
  
  const getInitials = (name) => {
    if (!name) return '?';
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const handleBackToList = () => {
    setShowConversationList(true);
  };

  const getActiveUserName = () => {
    if (!activeConversation) return '';
    const otherUser = users[activeConversation.otherUserId] || {};
    return otherUser.displayName || otherUser.companyName || 'Unknown User';
  };
  
  return (
    <MessengerContainer>
      <MessengerHeader>
        Messages
        <BackButton 
          onClick={handleBackToList} 
          $show={!showConversationList && activeConversation}
        >
          ← Back to Messages
        </BackButton>
        <ProfileButton to="/profile">
          <svg viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </ProfileButton>
      </MessengerHeader>
      <MessengerLayout>
        <ConversationList $hideOnMobile={!showConversationList}>
          {loading ? (
            <div style={{ padding: '1rem' }}>Loading conversations...</div>
          ) : conversations.length === 0 ? (
            <div style={{ padding: '1rem' }}>
              No conversations yet. 
              <div style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#666' }}>
                If you've sent messages before, they might be stored with different user IDs.
              </div>
            </div>
          ) : (
            conversations.map(conversation => {
              const otherUser = users[conversation.otherUserId] || {};
              const displayName = otherUser.displayName || otherUser.companyName || 'Unknown User';
              const appData = applications[conversation.applicationId];
              
              return (
                <ConversationItem 
                  key={`${conversation.applicationId}-${conversation.otherUserId}`}
                  onClick={() => handleConversationClick(conversation)}
                  $active={activeConversation?.id === conversation.id}
                  $unread={conversation.unread > 0}
                >
                  <UserAvatar>{getInitials(displayName)}</UserAvatar>
                  <ConversationDetails>
                    <ConversationName $unread={conversation.unread > 0}>
                      {displayName}
                    </ConversationName>
                    {appData && (
                      <ApplicationInfo>
                        Re: {appData.jobTitle || 'Job Application'}
                      </ApplicationInfo>
                    )}
                    <LastMessage>{conversation.content}</LastMessage>
                    <Timestamp>{formatTimestamp(conversation.timestamp)}</Timestamp>
                  </ConversationDetails>
                  {conversation.unread > 0 && (
                    <UnreadBadge>{conversation.unread}</UnreadBadge>
                  )}
                </ConversationItem>
              );
            })
          )}
        </ConversationList>
        
        <MessageBoxContainer>
          {activeConversation ? (
            <>
              {!showConversationList && (
                <MessageHeader>
                  <h3>{getActiveUserName()}</h3>
                </MessageHeader>
              )}
              <MessageBox 
                applicationId={activeConversation.applicationId}
                senderId={currentUser.uid}
                receiverId={activeConversation.otherUserId}
              />
            </>
          ) : (
            <NoConversation>
              Select a conversation to start messaging
            </NoConversation>
          )}
        </MessageBoxContainer>
      </MessengerLayout>
    </MessengerContainer>
  );
};

export default Messenger;