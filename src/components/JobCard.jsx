import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const CardHeader = styled.div`
  background-color: var(--primary);
  color: white;
  padding: 1rem;
`;

const CardBody = styled.div`
  padding: 1rem;
`;

const CardFooter = styled.div`
  padding: 1rem;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Tags = styled.div`
  margin-top: 0.5rem;
`;

const JobCard = ({ job, onInterviewClick }) => {
  return (
    <Card className="job-card">
      <CardHeader className="job-card-header">
        <h3>{job.title}</h3>
        <p>{job.company}</p>
      </CardHeader>
      <CardBody className="job-card-body">
        <p>{job.description}</p>
        <Tags className="tags">
          {job.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </Tags>
      </CardBody>
      <CardFooter className="job-card-footer">
        <span>Posted {job.postedTime}</span>
        <button 
          className="btn interview-btn" 
          onClick={() => onInterviewClick(job.type)}
        >
          Mock Interview
        </button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;