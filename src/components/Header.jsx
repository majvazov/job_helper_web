import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: var(--primary);
  color: white;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>FirstJob</h1>
      <p>Find your first job - No experience required</p>
    </HeaderContainer>
  );
};

export default Header;