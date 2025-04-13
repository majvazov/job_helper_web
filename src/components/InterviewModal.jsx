// File: /home/martin/Development/job_helper_web/src/components/InterviewModal.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getInterviewQuestions } from '../services/interviewService';

const ModalContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2.5rem;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const ModalHeader = styled.div`
  margin-bottom: 2.5rem;
  text-align: center;
  
  h2 {
    color: var(--primary);
    margin-bottom: 0.75rem;
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: -0.5px;
  }
  
  p {
    color: #666;
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.5;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #f0f0f0;
  border-radius: 4px;
  margin: 1.5rem 0;
  overflow: hidden;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const Progress = styled.div`
  width: ${props => props.$progress}%;
  height: 100%;
  background: linear-gradient(90deg, var(--primary) 0%, #4CAF50 100%);
  transition: width 0.5s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const QuestionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  
  h3 {
    margin: 0;
    color: #2c3e50;
    font-size: 1.4rem;
    font-weight: 600;
  }
  
  span {
    background: linear-gradient(135deg, var(--primary) 0%, #4CAF50 100%);
    color: white;
    padding: 0.4rem 1rem;
    border-radius: 20px;
    font-size: 0.95rem;
    margin-left: auto;
    font-weight: 500;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const QuestionText = styled.p`
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  line-height: 1.5;
  font-weight: 500;
`;

const QuestionContainer = styled.div`
  margin-bottom: 2rem;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const TipsSection = styled.div`
  margin: 2rem 0;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`;

const TipsHeader = styled.h4`
  margin-bottom: 1.2rem;
  color: #2c3e50;
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  
  &:before {
    content: "💡";
    margin-right: 0.5rem;
    font-size: 1.4rem;
  }
`;

const TipsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TipItem = styled.li`
  margin-bottom: 1rem;
  padding-left: 1.8rem;
  position: relative;
  line-height: 1.5;
  color: #4a5568;
  
  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: var(--primary);
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 1;
    top: -2px;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #edf2f7;
`;

const Button = styled.button`
  padding: 0.9rem 1.8rem;
  background: ${props => props.$disabled ? '#e2e8f0' : 'linear-gradient(135deg, var(--primary) 0%, #4CAF50 100%)'};
  color: ${props => props.$disabled ? '#a0aec0' : 'white'};
  border: none;
  border-radius: 8px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.2s ease;
  box-shadow: ${props => props.$disabled ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.1)'};
  
  &:not(:disabled):hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  &:not(:disabled):active {
    transform: translateY(0);
  }
`;

const AnswerSection = styled.div`
  margin-top: 2rem;
`;

const AnswerTextarea = styled.textarea`
  width: 100%;
  min-height: 180px;
  padding: 1.2rem;
  margin: 1rem 0;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1.1rem;
  resize: vertical;
  transition: all 0.2s ease;
  background-color: white;
  color: #2d3748;
  line-height: 1.5;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.15);
  }
  
  &::placeholder {
    color: #a0aec0;
  }
`;

const ProgressIndicator = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin-top: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`;

const ProgressCircles = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem 0;
`;

const Circle = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${props => props.$filled ? '#4CAF50' : '#e2e8f0'};
  transition: all 0.3s ease;
  
  ${props => props.$filled && `
    animation: fillIn 0.3s ease;
    @keyframes fillIn {
      0% { transform: scale(0.8); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); }
    }
  `}
`;

const ProgressMessage = styled.div`
  text-align: center;
  color: #4a5568;
  font-size: 1rem;
  margin-top: 0.5rem;
  
  span {
    color: ${props => props.complete ? '#276749' : '#4a5568'};
    font-weight: 600;
  }
`;

const SuccessMessage = styled.div`
  color: #276749;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem;
  background-color: #f0fff4;
  border-radius: 8px;
  margin-top: 1rem;
  
  span {
    font-size: 1.4rem;
  }
`;

const ErrorMessage = styled.div`
  color: #d32f2f;
  margin-top: 0.5rem;
  font-size: 0.875rem;
`;

const InterviewModal = ({ open, onClose, jobType: propJobType }) => {
  const { jobType: paramJobType } = useParams();
  const navigate = useNavigate();
  
  // Use jobType from props if provided, otherwise use from URL params
  const jobType = propJobType || paramJobType;
  
  const [interviewData, setInterviewData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [canProceed, setCanProceed] = useState(false);
  const [matchingWords, setMatchingWords] = useState([]);
  const [validationState, setValidationState] = useState({ answerWords: [], hasWordSpam: false });

  useEffect(() => {
    const fetchInterviewData = async () => {
      if (!jobType) {
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        const data = await getInterviewQuestions(jobType);
        console.log('Fetched interview data:', data);
        
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

  useEffect(() => {
    // Reset user answer and canProceed when moving to a new question
    setUserAnswer('');
    setCanProceed(false);
  }, [currentQuestionIndex]);

  const checkAnswer = (answer) => {
    if (!answer || !interviewData?.questions[currentQuestionIndex]) return;

    const keyWords = interviewData.questions[currentQuestionIndex].keyWords;
    if (!keyWords || !Array.isArray(keyWords)) return;

    // Get words from user's answer and clean them
    const answerWords = answer
      .toLowerCase()
      .replace(/[.,!?]/g, '') // Remove punctuation
      .split(/\s+/)
      .filter(word => word.length > 2); // Filter out very short words

    // Check for word repetition/spam
    const wordFrequency = {};
    answerWords.forEach(word => {
      wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    });

    // Detect word spam (if any word is repeated too many times)
    const MAX_WORD_REPETITION = 4;
    const spamWords = Object.entries(wordFrequency)
      .filter(([_, count]) => count > MAX_WORD_REPETITION)
      .map(([word]) => word);
    
    const hasWordSpam = spamWords.length > 0;

    if (hasWordSpam) {
      setCanProceed(false);
      setMatchingWords([]);
      return { answerWords, hasWordSpam, spamWords };
    }

    // Helper function to check if a word matches or contains a keyword
    const isWordMatch = (word, keyword) => {
      // Direct match
      if (word === keyword) return true;
      
      // Check for word variations
      if (word.includes(keyword) || keyword.includes(word)) return true;
      
      // Check for common word endings
      const wordStems = [
        word,
        word.replace(/ing$/, ''),
        word.replace(/ed$/, ''),
        word.replace(/s$/, ''),
        word.replace(/es$/, ''),
      ];
      
      const keywordStems = [
        keyword,
        keyword.replace(/ing$/, ''),
        keyword.replace(/ed$/, ''),
        keyword.replace(/s$/, ''),
        keyword.replace(/es$/, ''),
      ];
      
      return wordStems.some(stem => 
        keywordStems.some(keywordStem => 
          stem === keywordStem || 
          (stem.length > 3 && keywordStem.length > 3 && 
           (stem.includes(keywordStem) || keywordStem.includes(stem)))
        )
      );
    };

    // Find matching keywords with improved matching
    const uniqueMatchingWords = [...new Set(answerWords)].filter(word =>
      keyWords.some(keyword => isWordMatch(word, keyword.toLowerCase()))
    );
    
    // Debug logging
    console.log('Answer words:', answerWords);
    console.log('Keywords:', keyWords);
    console.log('Matching words:', uniqueMatchingWords);
    
    // Require 6 unique keyword matches
    const hasEnoughKeywords = uniqueMatchingWords.length >= 6;
    
    setCanProceed(hasEnoughKeywords);
    setMatchingWords(uniqueMatchingWords);
    return { 
      answerWords, 
      hasWordSpam: false,
      matchedKeywords: uniqueMatchingWords 
    };
  };

  const handleAnswerChange = (event) => {
    const newAnswer = event.target.value;
    setUserAnswer(newAnswer);
    const validationResult = checkAnswer(newAnswer);
    setValidationState(validationResult); // Store validation state
  };

  const handleNext = () => {
    if (currentQuestionIndex < interviewData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate('/');
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      navigate('/');
    }
  };
  
  if (loading) return <div>Loading interview questions...</div>;
  if (error) return <div>{error}</div>;
  if (!interviewData || !interviewData.questions || interviewData.questions.length === 0) 
    return <div>No interview questions available.</div>;

  const currentQuestion = interviewData.questions[currentQuestionIndex];
  console.log('Current question:', currentQuestion);

  return (
    <ModalContainer>
      <ModalHeader>
        <h2>{interviewData.title}</h2>
        <p>{interviewData.description}</p>
        <ProgressBar>
          <Progress $progress={(currentQuestionIndex + 1) / interviewData.questions.length * 100} />
        </ProgressBar>
      </ModalHeader>
      
      <QuestionContainer>
        <QuestionHeader>
          <h3>Question {currentQuestionIndex + 1}</h3>
          <span>{currentQuestionIndex + 1} of {interviewData.questions.length}</span>
        </QuestionHeader>
        
        <QuestionText>{currentQuestion.question}</QuestionText>

        <TipsSection>
          <TipsHeader>Tips:</TipsHeader>
          <TipsList>
            {currentQuestion.tips && currentQuestion.tips.map((tip, index) => (
              <TipItem key={index}>{tip}</TipItem>
            ))}
          </TipsList>
        </TipsSection>

        <AnswerSection>
          <AnswerTextarea
            value={userAnswer}
            onChange={handleAnswerChange}
            placeholder="Include at least 6 relevant keywords in your answer."
          />

          <ProgressIndicator>
            {!canProceed && userAnswer.length > 0 && (
              <>
                <div style={{ textAlign: 'center', color: '#4a5568', marginBottom: '0.5rem' }}>
                  {validationState.hasWordSpam ? (
                    "Please avoid repeating words excessively"
                  ) : (
                    "Include more relevant keywords in your answer"
                  )}
                </div>
                <ProgressCircles>
                  {Array(6).fill(0).map((_, index) => (
                    <Circle 
                      key={index}
                      $filled={index < matchingWords.length}
                    />
                  ))}
                </ProgressCircles>
                <ProgressMessage complete={false}>
                  <div>
                    <span>{6 - matchingWords.length}</span> more keywords needed
                  </div>
                </ProgressMessage>
              </>
            )}

            {canProceed && (
              <SuccessMessage>
                <span>✨</span>
                Excellent! Your answer includes all the required keywords.
              </SuccessMessage>
            )}
          </ProgressIndicator>
        </AnswerSection>
      </QuestionContainer>
      
      <NavigationButtons>
        <Button onClick={handlePrevious} $disabled={currentQuestionIndex === 0}>
          ← Previous
        </Button>
        
        {currentQuestionIndex < interviewData.questions.length - 1 ? (
          <Button onClick={handleNext} $disabled={!canProceed}>
            Next →
          </Button>
        ) : (
          <Button onClick={handleClose} $disabled={!canProceed}>
            Finish
          </Button>
        )}
      </NavigationButtons>
    </ModalContainer>
  );
};

export default InterviewModal;