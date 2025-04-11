import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  background-color: var(--primary-dark);
  padding: 0.5rem;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  border-radius: 4px;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  &.active {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLink href="#" className="active">Home</NavLink>
      <NavLink href="#">Browse Jobs</NavLink>
      <NavLink href="#">Mock Interviews</NavLink>
      <NavLink href="#">Resources</NavLink>
      <NavLink href="#">About</NavLink>
    </Nav>
  );
};

export default Navbar;