import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--dark);
  color: white;
  text-align: center;
  padding: 2rem;
  margin-top: 2rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2025 FirstJob - Helping beginners start their careers</p>
      <p>Contact: info@firstjob.example.com</p>
    </FooterContainer>
  );
};

export default Footer;