// File: /home/martin/Development/job_helper_web/src/components/Profile.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';
import { getUserProfile, removeJob } from '../services/userService';

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

const RemoveButton = styled.button`
  background-color: var(--danger);
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
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

const Profile = () => {
  const { currentUser, logout } = useAuth();
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
                <RemoveButton onClick={() => handleRemoveJob(job)}>
                  Remove
                </RemoveButton>
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
    </ProfileContainer>
  );
};

export default Profile;