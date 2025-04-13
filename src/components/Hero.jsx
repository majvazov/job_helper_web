import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  
  h2 {
    color: var(--primary);
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 1.5rem;
  }
`;

const Hero = ({ onPracticeClick }) => {
  return (
    <HeroSection className="hero">
      <h2>Start Your Career Journey Today</h2>
      <p>Find entry-level positions that don't require previous work experience and prepare for interviews with our mock interview tool.</p>
      <button className="btn btn-primary" onClick={onPracticeClick}>Practice Interviews</button>
    </HeroSection>
  );
};

export default Hero;