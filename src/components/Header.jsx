import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const HeaderContainer = styled.header`
  background-color: #2b5a1d;
  color: white;
  padding: 0 2rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: visible;
`;

const HeaderContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1;
`;

const LogoSection = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: -1.5rem 0;  /* Increased negative margin to allow more logo overflow */
`;

const Logo = styled.img`
  height: 120px;
  width: auto;
  transition: transform 0.2s ease;
  
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
`;

const NavList = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
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
  gap: 1rem;
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

  &:hover {
    background-color: ${props => props.$primary ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)'};
  }

  @media (max-width: 768px) {
    &[data-mobile-text]:before {
      content: attr(data-mobile-text);
    }
    &[data-mobile-text] > span {
      display: none;
    }
  }
`;

const Header = () => {
  const { currentUser } = useAuth();
  const [userType, setUserType] = useState(null);

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