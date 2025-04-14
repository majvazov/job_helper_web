import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';
import { getUserConversations } from '../services/messageService';

const NavContainer = styled.nav`
  background-color: white;
  padding: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavLeft = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavRight = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavItem = styled.li`
  padding: 0;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: var(--primary);
  }
`;

const NavIconLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  font-size: 1.25rem;
  position: relative;
  padding: 0.5rem;
  
  &:hover {
    color: var(--primary);
  }
`;

const UnreadBadge = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--primary);
  color: white;
  border-radius: 50%;
  min-width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: bold;
`;

const Navbar = () => {
  const { currentUser } = useAuth();
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    // Get unread message count
    const getUnreadMessages = async () => {
      if (!currentUser?.uid) return;
      
      try {
        const conversations = await getUserConversations(currentUser.uid);
        const unread = conversations.reduce((count, conv) => count + (conv.unread || 0), 0);
        setUnreadCount(unread);
      } catch (error) {
        console.error('Error getting unread messages:', error);
      }
    };
    
    getUnreadMessages();
    
    // Check for new messages periodically
    const interval = setInterval(getUnreadMessages, 60000); // Check every minute
    return () => clearInterval(interval);
  }, [currentUser]);

  return (
    <NavContainer>
      <NavList>
        <NavLeft>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink to="/interview/customer-service">Practice Interviews</NavLink>
          </NavItem>
          
        </NavLeft>
        <NavRight>
          {currentUser ? (
            <>
              <NavItem>
                <NavIconLink to="/messages" title="Messages">
                  <span role="img" aria-label="Messages">✉️</span>
                  {unreadCount > 0 && <UnreadBadge>{unreadCount}</UnreadBadge>}
                </NavIconLink>
              </NavItem>
              <NavItem>
                <NavLink to="/profile">My Profile</NavLink>
              </NavItem>
            </>
          ) : (
            <>
              <NavItem>
                <NavLink to="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/register">Register</NavLink>
              </NavItem>
            </>
          )}
        </NavRight>
      </NavList>
    </NavContainer>
  );
};

export default Navbar;