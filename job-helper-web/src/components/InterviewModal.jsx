import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import interviewData from '../data/interviewData';

const ModalOverlay = styled.div`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  overflow-y: auto;
`;

const ModalContent = styled.div`
  background-color: white;
  margin: 10% auto;
  padding: 2rem;
  width: 80%;
  max-width: 800px;
  border-radius: 8px;
  position: relative;
  
  @media (max-width: 768px) {
    width: 95%;
    margin: 5% auto;
  }
`;

const CloseButton = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
`;

const QuestionContainer = styled.div`
  background-color: var(--light);
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const AnswerInput = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 1rem;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
`;

const FeedbackContainer = styled.div`
  display: ${props => props.visible ? 'block' : 'none'};
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
  background-color: ${props => props.type === 'good' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)'};
  border: 1px solid ${props => props.type === 'good' ? 'var(--success)' : 'var(--error)'};
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const InterviewModal = ({ isOpen, jobType, onClose }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [showGoodFeedback, setShowGoodFeedback] = useState(false);
  const [showBadFeedback, setShowBadFeedback] = useState(false);
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [interviewCompleted, setInterviewCompleted] = useState(false);
  
  // Reset state when modal opens with a new job type
  useEffect(() => {
    if (isOpen) {
      setCurrentQuestionIndex(0);
      setAnswer('');
      setShowGoodFeedback(false);
      setShowBadFeedback(false);
      setInterviewStarted(false);
      setInterviewCompleted(false);
    }
  }, [isOpen, jobType]);
  
  const jobData = interviewData[jobType];
  
  if (!jobData) {
    return null;
  }
  
  const currentQuestion = interviewStarted && !interviewCompleted 
    ? jobData.questions[currentQuestionIndex]
    : null;
  
  const handleStartInterview = () => {
    setInterviewStarted(true);
    setInterviewCompleted(false);
  };
  
  const handleSubmitAnswer = () => {
    if (answer.trim().length < 20) {
      alert("Please provide a more detailed answer.");
      return;
    }
    
    // Provide feedback based on answer length
    // In a real app, you would use more sophisticated analysis
    if (answer.length > 100) {
      setShowGoodFeedback(true);
      setShowBadFeedback(false);
    } else {
      setShowGoodFeedback(false);
      setShowBadFeedback(true);
    }
  };
  
  const handleNextQuestion = () => {
    setCurrentQuestionIndex(prev => prev + 1);
    setAnswer('');
    setShowGoodFeedback(false);
    setShowBadFeedback(false);
  };
  
  const handleFinishInterview = () => {
    setInterviewCompleted(true);
  };
  
  const handleRestartInterview = () => {
    setCurrentQuestionIndex(0);
    setAnswer('');
    setShowGoodFeedback(false);
    setShowBadFeedback(false);
    setInterviewStarted(true);
    setInterviewCompleted(false);
  };
  
  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>{jobData.title}</h2>
        <p>{jobData.description}</p>
        
        <QuestionContainer>
          {!interviewStarted && (
            <p>Click "Start Interview" to begin.</p>
          )}
          {interviewStarted && !interviewCompleted && (
            <p>{currentQuestion.question}</p>
          )}
          {interviewCompleted && (
            <p>Interview practice completed! You've answered all the questions for this position.</p>
          )}
        </QuestionContainer>
        
        {interviewStarted && !interviewCompleted && (
          <>
            <AnswerInput
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your answer here..."
              disabled={showGoodFeedback || showBadFeedback}
            />
            
            <FeedbackContainer visible={showGoodFeedback} type="good">
              <h4>Good Answer!</h4>
              <p>{currentQuestion.goodFeedback}</p>
            </FeedbackContainer>
            
            <FeedbackContainer visible={showBadFeedback} type="bad">
              <h4>Consider Improving</h4>
              <p>{currentQuestion.badFeedback}</p>
            </FeedbackContainer>
          </>
        )}
        
        <ButtonContainer>
          {!interviewStarted && (
            <button className="btn btn-primary" onClick={handleStartInterview}>
              Start Interview
            </button>
          )}
          
          {interviewStarted && !interviewCompleted && !showGoodFeedback && !showBadFeedback && (
            <button className="btn btn-primary" onClick={handleSubmitAnswer}>
              Submit Answer
            </button>
          )}
          
          {(showGoodFeedback || showBadFeedback) && currentQuestionIndex < jobData.questions.length - 1 && (
            <button className="btn" onClick={handleNextQuestion}>
              Next Question
            </button>
          )}
          
          {(showGoodFeedback || showBadFeedback) && currentQuestionIndex === jobData.questions.length - 1 && (
            <button className="btn" onClick={handleFinishInterview}>
              Finish Interview
            </button>
          )}
          
          {interviewCompleted && (
            <button className="btn btn-primary" onClick={handleRestartInterview}>
              Practice Again
            </button>
          )}
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default InterviewModal;