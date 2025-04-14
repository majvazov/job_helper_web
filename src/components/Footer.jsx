import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  color: #212529;
  text-align: center;
  padding: 1.5rem;
  margin-top: 1.5rem;
  border-top: 1px solid #dee2e6;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin: 0.5rem 0;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const SocialLink = styled.a`
  color: #212529;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary);
  }
`;

const FooterInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Version = styled.p`
  font-size: 0.8rem;
  color: #6c757d;
  margin-top: 0.75rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const CopyrightText = styled.p`
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Footer = () => {
  const version = "1.0.0";
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <CopyrightText>&copy; {currentYear} FirstJob - Helping beginners start their careers</CopyrightText>
        
        <FooterInfo>
          <ContactItem>
            <span role="img" aria-label="email">📧</span>
            <a href="mailto:info@firstjob.example.com" style={{ color: '#212529' }}>
              info@firstjob.example.com
            </a>
          </ContactItem>
          
          <ContactItem>
            <span role="img" aria-label="phone">📞</span>
            <a href="tel:+1234567890" style={{ color: '#212529' }}>
              +1 (234) 567-890
            </a>
          </ContactItem>
        </FooterInfo>
        
        <SocialLinks>
          <SocialLink href="https://facebook.com/firstjob" target="_blank" rel="noopener noreferrer">
            <span role="img" aria-label="facebook">📘</span> Facebook
          </SocialLink>
          
          <SocialLink href="https://instagram.com/firstjob" target="_blank" rel="noopener noreferrer">
            <span role="img" aria-label="instagram">📷</span> Instagram
          </SocialLink>
          
          <SocialLink href="https://linkedin.com/company/firstjob" target="_blank" rel="noopener noreferrer">
            <span role="img" aria-label="linkedin">💼</span> LinkedIn
          </SocialLink>
        </SocialLinks>
        
        <Version>Version {version}</Version>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;