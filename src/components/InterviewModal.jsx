// File: /home/martin/Development/job_helper_web/src/components/InterviewModal.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getInterviewQuestions } from '../services/interviewService';

const ModalContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ModalHeader = styled.div`
  margin-bottom: 2rem;
`;

const QuestionContainer = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: var(--background-secondary);
  border-radius: 8px;
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const InterviewModal = () => {
  const { jobType } = useParams();
  const navigate = useNavigate();
  
  const [interviewData, setInterviewData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchInterviewData = async () => {
      try {
        setLoading(true);
        const data = await getInterviewQuestions(jobType);
        
        if (!data) {
          setError(`No interview questions found for ${jobType} jobs.`);
        } else {
          setInterviewData(data);
          setError(null);
        }
      } catch (err) {
        console.error('Error fetching interview data:', err);
        setError('Failed to load interview questions. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchInterviewData();
  }, [jobType]);
  
  const handleNext = () => {
    if (currentQuestionIndex < interviewData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const handleClose = () => {
    navigate('/');
  };
  
  if (loading) return <div>Loading interview questions...</div>;
  if (error) return <div>{error}</div>;
  if (!interviewData || !interviewData.questions || interviewData.questions.length === 0) 
    return <div>No interview questions available.</div>;
  
  const currentQuestion = interviewData.questions[currentQuestionIndex];
  
  return (
    <ModalContainer>
      <ModalHeader>
        <h2>{interviewData.title}</h2>
        <p>{interviewData.description}</p>
      </ModalHeader>
      
      <QuestionContainer>
        <h3>Question {currentQuestionIndex + 1} of {interviewData.questions.length}</h3>
        <p>{currentQuestion.question}</p>
        
        <h4 style={{ marginTop: '1rem' }}>Tips:</h4>
        <ul>
          {currentQuestion.tips && currentQuestion.tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </QuestionContainer>
      
      <NavigationButtons>
        <Button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
          Previous
        </Button>
        
        {currentQuestionIndex < interviewData.questions.length - 1 ? (
          <Button onClick={handleNext}>Next</Button>
        ) : (
          <Button onClick={handleClose}>Finish</Button>
        )}
      </NavigationButtons>
    </ModalContainer>
  );
};

export default InterviewModal;