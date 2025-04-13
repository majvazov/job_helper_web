import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';
import { getAllJobs } from '../services/jobService';
import { saveJob } from '../services/userService';

// Styled components
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

const JobCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const JobTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: var(--primary);
  font-weight: bold;
  font-size: 1.25rem;
`;

const JobCompany = styled.h4`
  margin-top: 0;
  margin-bottom: 1rem;
  color: var(--text-secondary);
`;

const JobDescription = styled.p`
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  background-color: var(--background-secondary);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  color: var(--text-secondary);
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

const PracticeButton = styled(Link)`
  background-color: #F28C28;
  color: white;
  text-decoration: none;
  padding: 0.8rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  text-align: center;
  flex: 1;
  transition: background-color 0.2s, color 0.2s, border 0.2s;
  border: 1px solid transparent;
  
  &:hover {
    background-color: white;
    color: #F28C28;
    border: 1px solid #F28C28;
  }
`;

const SaveButton = styled.button`
  background-color: white;
  color: var(--primary);
  border: 1px solid var(--primary);
  padding: 0.8rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  flex: 1;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

const JobGrid = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const jobData = await getAllJobs();
        setJobs(jobData);
        setError(null);
      } catch (err) {
        console.error('Error fetching jobs:', err);
        setError('Failed to load jobs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleSaveJob = async (job) => {
    if (!currentUser) {
      alert('Please login to save jobs');
      return;
    }
    
    try {
      const result = await saveJob(currentUser.uid, job);
      if (result) {
        alert('Job saved successfully');
      } else {
        alert('Failed to save job');
      }
    } catch (error) {
      console.error('Error saving job:', error);
      alert('Failed to save job');
    }
  };

  if (loading) return <div>Loading jobs...</div>;
  if (error) return <div>{error}</div>;

  return (
    <GridContainer>
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <JobCard key={job.id}>
            <JobTitle>{job.title}</JobTitle>
            <JobCompany>{job.company}</JobCompany>
            <JobDescription>{job.description}</JobDescription>
            <TagContainer>
              {job.tags && job.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </TagContainer>
            <ButtonContainer>
              <PracticeButton to={`/interview/${job.jobType}`}>
                Practice Interview
              </PracticeButton>
              <SaveButton onClick={() => handleSaveJob(job)}>
                Save Job
              </SaveButton>
            </ButtonContainer>
          </JobCard>
        ))
      ) : (
        <p>No jobs found. Please check back later.</p>
      )}
    </GridContainer>
  );
};

export default JobGrid;