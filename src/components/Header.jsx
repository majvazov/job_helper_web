import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useNotifications } from '../context/NotificationContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { getUserConversations } from '../services/messageService';

const HeaderContainer = styled.header`
  background-color: #2b5a1d;
  color: white;
  padding: 0 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow-x: hidden; /* Prevent horizontal scrolling */
  width: 100%;
`;

const HeaderContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    flex-wrap: nowrap;
    padding: 0.5rem 0;
  }
`;

const LogoSection = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: -1.5rem 0;
  flex-shrink: 1;
  min-width: 0; /* Allow flex item to shrink below content size */
  
  @media (max-width: 768px) {
    margin: -1rem 0;
  }
`;

const Logo = styled.img`
  height: 120px;
  width: auto;
  transition: transform 0.2s ease;
  
  @media (max-width: 768px) {
    height: 80px;
  }
  
  &:hover {
    transform: scale(1.05);
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const Slogan = styled.p`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
    display: none; /* Hide on smallest screens */
  }
`;

const NavItem = styled.li`
  padding: 0;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 500;
  font-size: 0.95rem;
  transition: opacity 0.2s;
  padding: 0.3rem 0.7rem;
  border-radius: 4px;

  &:hover {
    opacity: 0.9;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const AuthSection = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const AuthButton = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  transition: all 0.2s;
  background-color: ${props => props.$primary ? 'rgba(255, 255, 255, 0.2)' : 'transparent'};
  border: 1px solid ${props => props.$primary ? 'transparent' : 'rgba(255, 255, 255, 0.5)'};
  white-space: nowrap;

  &:hover {
    background-color: ${props => props.$primary ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)'};
  }

  @media (max-width: 768px) {
    padding: 0.3rem 0.5rem;
    font-size: 0.85rem;
    
    &[data-mobile-text]:before {
      content: attr(data-mobile-text);
    }
    &[data-mobile-text] > span {
      display: none;
    }
  }
`;

const NavIconLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
  position: relative;
  padding: 0.5rem;
  
  &:hover {
    opacity: 0.9;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const UnreadBadge = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #ec4a4a;
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

const Header = () => {
  const { currentUser } = useAuth();
  const [userType, setUserType] = useState(null);
  const { unreadCount, refreshUnreadCount } = useNotifications();

  useEffect(() => {
    const fetchUserType = async () => {
      if (currentUser) {
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) {
          setUserType(userDoc.data().userType);
        }
      }
    };

    fetchUserType();
  }, [currentUser]);

  useEffect(() => {
    if (currentUser?.uid) {
      // Initial fetch of unread count
      refreshUnreadCount(currentUser.uid);
      
      // Set up interval for periodic refresh
      const interval = setInterval(() => {
        refreshUnreadCount(currentUser.uid);
      }, 60000); // Check every minute
      
      return () => clearInterval(interval);
    }
  }, [currentUser, refreshUnreadCount]);

  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoSection to="/">
          <Logo src="/logo.png" alt="FirstJob Logo" />
          <TextContainer>
            <Slogan>Find your first job - No experience required</Slogan>
          </TextContainer>
        </LogoSection>

        <Navigation>
          <NavList>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            {(!currentUser || userType === 'jobseeker') && (
              <NavItem>
                <NavLink to="/interview/customer-service">Practice Interviews</NavLink>
              </NavItem>
            )}
          </NavList>

          <AuthSection>
            {currentUser ? (
              <>
                {currentUser && (
                  <NavIconLink to="/messages" title="Messages">
                    <span role="img" aria-label="Messages">✉️</span>
                    {unreadCount > 0 && <UnreadBadge>{unreadCount}</UnreadBadge>}
                  </NavIconLink>
                )}
                {userType === 'employer' ? (
                  <AuthButton to="/employer/dashboard" $primary data-mobile-text="Dashboard">
                    <span>Employer Dashboard</span>
                  </AuthButton>
                ) : (
                  <AuthButton to="/profile" $primary>
                    My Profile
                  </AuthButton>
                )}
              </>
            ) : (
              <>
                <AuthButton to="/login">
                  Login
                </AuthButton>
                <AuthButton to="/register" $primary>
                  Register
                </AuthButton>
              </>
            )}
          </AuthSection>
        </Navigation>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;