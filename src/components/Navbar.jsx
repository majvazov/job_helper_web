import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';

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

const Navbar = () => {
  const { currentUser } = useAuth();

  return (
    <NavContainer>
      <NavList>
        <NavLeft>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/jobs">Browse Jobs</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/interview/customer-service">Practice Interviews</NavLink>
          </NavItem>
        </NavLeft>
        <NavRight>
          {currentUser ? (
            <NavItem>
              <NavLink to="/profile">My Profile</NavLink>
            </NavItem>
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