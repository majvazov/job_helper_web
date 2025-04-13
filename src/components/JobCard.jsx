import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const JobTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: var(--primary);
  font-weight: bold;
  font-size: 1.25rem; /* Increased font size */
`;

const JobCompany = styled.h4`
  margin-top: 0;
  margin-bottom: 1rem;
  color: var(--text-secondary);
`;

const JobDescription = styled.p`
  color: var(--text-primary);
  margin-bottom: 1.5rem;
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
`;

const PracticeButton = styled(Link)`
  background-color: #FFA500;
  color: white;
  text-decoration: none;
  padding: 0.8rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  text-align: center;
  flex: 1;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: white;
    color: #FFA500;
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

const JobCard = ({ job, onSaveJob, isLoggedIn }) => {
  const handleSaveClick = () => {
    if (!isLoggedIn) {
      alert('Please login to save jobs');
      return;
    }
    onSaveJob(job);
  };

  return (
    <Card>
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
          Practice Interviews
        </PracticeButton>
        <SaveButton onClick={handleSaveClick}>
          Save Job
        </SaveButton>
      </ButtonContainer>
    </Card>
  );
};

JobCard.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    jobType: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  onSaveJob: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool
};

JobCard.defaultProps = {
  isLoggedIn: false
};

export default JobCard;