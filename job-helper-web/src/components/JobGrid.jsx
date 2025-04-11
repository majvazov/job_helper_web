import React from 'react';
import styled from 'styled-components';
import JobCard from './JobCard';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SectionTitle = styled.h2`
  margin-bottom: 0.5rem;
`;

const SectionDescription = styled.p`
  margin-bottom: 1.5rem;
`;

const JobGrid = ({ jobs, onInterviewClick }) => {
  return (
    <>
      <SectionTitle id="jobs">Latest Job Opportunities</SectionTitle>
      <SectionDescription>These positions are perfect for beginners with no prior experience</SectionDescription>
      
      <Grid className="job-grid">
        {jobs.map((job, index) => (
          <JobCard 
            key={index} 
            job={job} 
            onInterviewClick={onInterviewClick} 
          />
        ))}
      </Grid>
    </>
  );
};

export default JobGrid;