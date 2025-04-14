// File: /home/martin/Development/job_helper_web/src/components/Profile.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';
import { getUserProfile, removeJob } from '../services/userService';
import InterviewModal from './InterviewModal';
import MessageBox from './MessageBox';

const ProfileContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const JobList = styled.ul`
  list-style: none;
  padding: 0;
`;

const JobItem = styled.li`
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: var(--background-secondary);
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const JobActions = styled.div`
  display: flex;
  gap: 1rem;
`;

const ActionButton = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  
  &.remove {
    background-color: var(--danger);
  }
  
  &.practice {
    background-color: var(--primary);
  }

  &.message {
    background-color: var(--primary);
  }
`;

const LogoutButton = styled.button`
  background-color: var(--danger);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 2rem;
`;

const Modal = styled.div`
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
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;

  &:hover {
    color: #333;
  }
`;

const Profile = () => {
  const { currentUser, logout } = useAuth();
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showInterview, setShowInterview] = useState(false);
  const [selectedJobType, setSelectedJobType] = useState(null);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!currentUser) {
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        const profile = await getUserProfile(currentUser.uid);
        setUserProfile(profile);
        setError(null);
      } catch (err) {
        console.error('Error fetching user profile:', err);
        setError('Failed to load profile data.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchUserProfile();
  }, [currentUser]);
  
  const handleRemoveJob = async (job) => {
    try {
      await removeJob(currentUser.uid, job);
      // Update the local state
      setUserProfile({
        ...userProfile,
        savedJobs: userProfile.savedJobs.filter(savedJob => 
          savedJob.id !== job.id
        )
      });
    } catch (error) {
      console.error('Error removing job:', error);
    }
  };
  
  const handlePracticeInterview = (job) => {
    // Map common job titles to our interview types
    const jobTypeMap = {
      'sales associate': 'sales',
      'sales representative': 'sales',
      'customer service representative': 'customer-service',
      'customer service agent': 'customer-service',
      'web developer': 'web-developer',
      'frontend developer': 'web-developer',
      'backend developer': 'web-developer',
      'administrative assistant': 'admin',
      'office administrator': 'admin',
      'data entry clerk': 'data-entry',
      'data entry specialist': 'data-entry',
      'social media manager': 'social-media',
      'social media specialist': 'social-media'
    };

    const jobTitle = job.title.toLowerCase();
    const interviewType = jobTypeMap[jobTitle] || jobTitle.replace(/\s+/g, '-');
    
    setSelectedJobType(interviewType);
    setShowInterview(true);
  };

  const handleMessageClick = (application) => {
    setSelectedApplication(application);
    setShowMessageModal(true);
  };
  
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  
  if (loading) return <div>Loading profile...</div>;
  if (error) return <div>{error}</div>;
  if (!currentUser) {
    navigate('/login');
    return null;
  }
  
  return (
    <ProfileContainer>
      <h2>My Profile</h2>
      
      <Section>
        <h3>Account Information</h3>
        <p><strong>Name:</strong> {userProfile?.name || 'Not provided'}</p>
        <p><strong>Email:</strong> {currentUser.email}</p>
        <p><strong>Member since:</strong> {
          userProfile?.createdAt ? 
          new Date(userProfile.createdAt).toLocaleDateString() :
          'Recently'
        }</p>
      </Section>
      
      <Section>
        <h3>Saved Jobs</h3>
        {userProfile?.savedJobs?.length > 0 ? (
          <JobList>
            {userProfile.savedJobs.map((job, index) => (
              <JobItem key={index}>
                <div>
                  <strong>{job.title}</strong> at {job.company}
                </div>
                <JobActions>
                  <ActionButton 
                    className="practice"
                    onClick={() => handlePracticeInterview(job)}
                  >
                    Practice Interview
                  </ActionButton>
                  <ActionButton 
                    className="message"
                    onClick={() => handleMessageClick(job)}
                  >
                    Message
                  </ActionButton>
                  <ActionButton 
                    className="remove"
                    onClick={() => handleRemoveJob(job)}
                  >
                    Remove
                  </ActionButton>
                </JobActions>
              </JobItem>
            ))}
          </JobList>
        ) : (
          <p>You haven't saved any jobs yet.</p>
        )}
      </Section>
      
      <LogoutButton onClick={handleLogout}>
        Logout
      </LogoutButton>

      {showInterview && selectedJobType && (
        <InterviewModal
          jobType={selectedJobType}
          open={showInterview}
          onClose={() => setShowInterview(false)}
        />
      )}

      {showMessageModal && selectedApplication && (
        <Modal>
          <ModalContent>
            <CloseButton onClick={() => setShowMessageModal(false)}>&times;</CloseButton>
            <h3>Messaging about {selectedApplication.title}</h3>
            <MessageBox
              applicationId={selectedApplication.id}
              senderId={currentUser.uid}
              receiverId={selectedApplication.employerId}
            />
          </ModalContent>
        </Modal>
      )}
    </ProfileContainer>
  );
};

export default Profile;