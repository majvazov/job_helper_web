import React, { useState } from 'react';
import styled from 'styled-components';
import { submitApplication } from '../services/applicationService';
import { useAuth } from '../context/AuthContext';
import MessageBox from './MessageBox';
import { collection, query, where, getDocs, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 200px;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &.primary {
    background-color: var(--primary);
    color: white;

    &:hover {
      background-color: #1a4314;
    }
  }

  &.secondary {
    background-color: #6c757d;
    color: white;

    &:hover {
      background-color: #5a6268;
    }
  }
`;

const ApplicationModal = ({ job, onClose }) => {
  const { currentUser } = useAuth();
  const [motivationLetter, setMotivationLetter] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [applicationId, setApplicationId] = useState(null);
  const [showMessages, setShowMessages] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const userRef = collection(db, 'users');
      const userQuery = query(userRef, where('uid', '==', currentUser.uid));
      const userSnapshot = await getDocs(userQuery);
      const userData = userSnapshot.docs[0]?.data() || {};

      const applicationData = {
        jobId: job.id,
        applicantId: currentUser.uid,
        employerId: job.employerId,
        motivationLetter,
        timestamp: Timestamp.now(),
        status: 'pending',
        applicantName: userData.name || currentUser.displayName || 'Anonymous User',
        applicantEmail: userData.email || currentUser.email || 'No email provided'
      };

      const docRef = await addDoc(collection(db, 'applications'), applicationData);
      setApplicationId(docRef.id);
      setShowMessages(true);
      onClose();
    } catch (error) {
      console.error('Error submitting application:', error);
      setError('Failed to submit application. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <h2>Apply for {job.title}</h2>
        <p><strong>Company:</strong> {job.company}</p>
        
        {!showMessages ? (
          <Form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="motivationLetter">Motivation Letter</label>
              <TextArea
                id="motivationLetter"
                value={motivationLetter}
                onChange={(e) => setMotivationLetter(e.target.value)}
                placeholder="Write your motivation letter here..."
                required
              />
            </div>
            <ButtonGroup>
              <Button type="button" className="secondary" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" className="primary" disabled={submitting}>
                {submitting ? 'Submitting...' : 'Submit Application'}
              </Button>
            </ButtonGroup>
          </Form>
        ) : (
          <>
            <p>Your application has been submitted successfully!</p>
            <MessageBox
              applicationId={applicationId}
              senderId={currentUser.uid}
              receiverId={job.employerId}
            />
            <ButtonGroup>
              <Button type="button" className="secondary" onClick={onClose}>
                Close
              </Button>
            </ButtonGroup>
          </>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default ApplicationModal; 