import React, { createContext, useContext, useState, useEffect } from 'react';
import { getUserConversations } from '../services/messageService';

const NotificationContext = createContext();

export const useNotifications = () => {
  return useContext(NotificationContext);
};

export const NotificationProvider = ({ children }) => {
  const [unreadCount, setUnreadCount] = useState(0);
  const [lastRefresh, setLastRefresh] = useState(Date.now());
  const [debugInfo, setDebugInfo] = useState([]);

  const refreshUnreadCount = async (userId) => {
    if (!userId) return;
    
    try {
      console.log('Refreshing unread message count for user:', userId);
      const conversations = await getUserConversations(userId);
      
      // Debug each conversation's unread status
      const unreadDetails = conversations.map(conv => ({
        from: conv.otherUserId,
        applicationId: conv.applicationId || 'default',
        unreadCount: conv.unread || 0,
        lastMessage: conv.content?.substring(0, 20) + '...',
        read: !!conv.read
      }));
      
      const count = conversations.reduce((total, conv) => total + (conv.unread || 0), 0);
      console.log(`Total unread count: ${count} from ${conversations.length} conversations`);
      
      setDebugInfo([
        {
          timestamp: new Date().toLocaleTimeString(),
          userId,
          count,
          details: unreadDetails
        },
        ...debugInfo.slice(0, 4) // Keep last 5 entries
      ]);
      
      setUnreadCount(count);
      setLastRefresh(Date.now());
      return count;
    } catch (error) {
      console.error('Error refreshing unread count:', error);
      return unreadCount;
    }
  };

  const forceRefreshAllCounts = () => {
    console.log('Force refreshing all unread counts');
    setLastRefresh(Date.now());
  };

  const value = {
    unreadCount,
    refreshUnreadCount,
    forceRefreshAllCounts,
    lastRefresh,
    debugInfo
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};