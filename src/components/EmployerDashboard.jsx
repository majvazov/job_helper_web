import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { getEmployerJobs, postJob, updateJob, deleteJob } from '../services/jobService';
import { getEmployerProfile, createEmployerProfile } from '../services/employerService';
import { getJobApplications } from '../services/applicationService';
import styled from 'styled-components';
import { db } from '../firebase/config';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import MessageBox from './MessageBox';

const DashboardContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 2rem auto;
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const JobForm = styled.form`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 100px;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  background-color: white;
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1a4314;
  }

  &.delete {
    background-color: var(--danger);
  }
`;

const JobList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
  width: 100%;
`;

const JobCard = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;

  h4 {
    margin: 0;
    font-size: 1.2rem;
    color: var(--primary);
  }

  p {
    margin: 0.5rem 0;
    font-size: 0.95rem;
  }
`;

const JobContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
  align-items: center;
`;

const JobInfo = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin: 1rem 0;

  p {
    margin: 0;
    min-width: 200px;
  }
`;

const JobActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const LogoutButton = styled(Button)`
  background-color: var(--danger);
  margin-top: 2rem;
  width: 100%;
  max-width: 200px;
  
  &:hover {
    background-color: #d32f2f;
  }
`;

const ApplicationsList = styled.div`
  margin-top: 1rem;
  border-top: 1px solid #eee;
  padding-top: 1rem;
`;

const ApplicationItem = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  &:last-child {
    border-bottom: none;
  }
`;

const ApplicationDetails = styled.div`
  flex: 1;
`;

const MessageButton = styled.button`
  background-color: var(--primary);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  white-space: nowrap;
  height: fit-content;

  &:hover {
    background-color: #1a4314;
  }
`;

const SectionTitle = styled.h3`
  margin: 2rem 0 1rem;
  color: var(--primary);
  font-size: 1.5rem;
`;

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: var(--primary);
  margin-bottom: 2rem;
`;

const ApplicationsGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

const ApplicantName = styled.h3`
  margin: 0 0 1rem 0;
  color: var(--primary);
`;

const ApplicationInfo = styled.div`
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #666;
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

const EmployerDashboard = () => {
  const { currentUser, logout } = useAuth();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [employerProfile, setEmployerProfile] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    type: 'Full-time',
    salary: '',
    requirements: '',
    benefits: '',
    category: 'customer-service'
  });
  const [jobApplicationsWithUsers, setJobApplicationsWithUsers] = useState({});
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [showMessageModal, setShowMessageModal] = useState(false);

  useEffect(() => {
    fetchEmployerData();
  }, [currentUser]);

  const fetchEmployerData = async () => {
    if (currentUser) {
      const [employerJobs, profile] = await Promise.all([
        getEmployerJobs(currentUser.uid),
        getEmployerProfile(currentUser.uid)
      ]);

      // If no profile exists, create one
      if (!profile) {
        const newProfile = await createEmployerProfile(currentUser.uid, {
          companyName: currentUser.displayName || 'Default Company Name',
          email: currentUser.email,
          phone: '',
          address: '',
          website: '',
          description: ''
        });
        setEmployerProfile(newProfile);
      } else {
        setEmployerProfile(profile);
      }

      setJobs(employerJobs);

      // Fetch applications for each job
      const applications = {};
      await Promise.all(
        employerJobs.map(async (job) => {
          const jobApplications = await getJobApplications(job.id);
          
          // Fetch user data for each application
          const applicationsWithUsers = await Promise.all(
            jobApplications.map(async (application) => {
              const userRef = doc(db, 'users', application.userId);
              const userSnap = await getDoc(userRef);
              const userData = userSnap.data() || {};
              
              return {
                ...application,
                applicantName: userData.name || 'Anonymous User',
                applicantEmail: userData.email || 'No email provided'
              };
            })
          );
          
          applications[job.id] = applicationsWithUsers;
        })
      );
      setJobApplicationsWithUsers(applications);
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (!employerProfile) {
        throw new Error('Employer profile not found');
      }

      const jobData = {
        ...formData,
        employerId: currentUser.uid,
        company: employerProfile.companyName,
        requirements: formData.requirements ? formData.requirements.split(',').map(req => req.trim()) : [],
        benefits: formData.benefits ? formData.benefits.split(',').map(benefit => benefit.trim()) : []
      };

      await postJob(jobData);
      await fetchEmployerData();
      setShowForm(false);
      setFormData({
        title: '',
        description: '',
        location: '',
        type: 'Full-time',
        salary: '',
        requirements: '',
        benefits: '',
        category: 'customer-service'
      });
    } catch (error) {
      console.error('Error posting job:', error);
    }
  };

  const handleDeleteJob = async (jobId) => {
    if (window.confirm('Are you sure you want to delete this job posting?')) {
      try {
        await deleteJob(jobId);
        await fetchEmployerData();
      } catch (error) {
        console.error('Error deleting job:', error);
      }
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  useEffect(() => {
    const fetchApplications = async () => {
      if (!currentUser?.uid) return;

      const applicationsRef = collection(db, 'applications');
      const q = query(
        applicationsRef,
        where('employerId', '==', currentUser.uid)
      );

      try {
        const querySnapshot = await getDocs(q);
        const applicationsData = await Promise.all(
          querySnapshot.docs.map(async doc => {
            const appData = doc.data();
            
            // Fetch the user document to get the name
            const userRef = doc(db, 'users', appData.userId);
            const userSnap = await getDoc(userRef);
            const userData = userSnap.data() || {};

            return {
              id: doc.id,
              ...appData,
              applicantId: appData.userId, // Ensure we have applicantId
              applicantName: userData.name || 'Anonymous User',
              applicantEmail: userData.email || 'No email provided'
            };
          })
        );
        setApplications(applicationsData);
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };

    fetchApplications();
  }, [currentUser]);

  const handleMessageClick = (application) => {
    console.log('Opening message modal for application:', application); // Debug log
    setSelectedApplication(application);
    setShowMessageModal(true);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <DashboardContainer>
      <h2>Employer Dashboard</h2>

      <Button onClick={() => setShowForm(!showForm)} style={{ marginBottom: '2rem' }}>
        {showForm ? 'Cancel' : 'Post New Job'}
      </Button>

      {showForm && (
        <JobForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Job Title</Label>
            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Job Description</Label>
            <TextArea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Location</Label>
            <Input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Job Type</Label>
            <Select
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              required
            >
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label>Category</Label>
            <Select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
            >
              <option value="customer-service">Customer Service</option>
              <option value="web-developer">Web Developer</option>
              <option value="sales">Sales</option>
              <option value="admin">Administrative</option>
              <option value="data-entry">Data Entry</option>
              <option value="social-media">Social Media</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label>Salary Range</Label>
            <Input
              type="text"
              name="salary"
              value={formData.salary}
              onChange={handleInputChange}
              placeholder="e.g. $30,000 - $40,000"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Requirements (comma-separated)</Label>
            <TextArea
              name="requirements"
              value={formData.requirements}
              onChange={handleInputChange}
              placeholder="e.g. High school diploma, Good communication skills, Basic computer knowledge"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Benefits (comma-separated)</Label>
            <TextArea
              name="benefits"
              value={formData.benefits}
              onChange={handleInputChange}
              placeholder="e.g. Health insurance, 401k, Paid time off"
              required
            />
          </FormGroup>

          <Button type="submit">Post Job</Button>
        </JobForm>
      )}

      <SectionTitle>Your Job Postings</SectionTitle>
      <JobList>
        {jobs.map(job => (
          <JobCard key={job.id}>
            <h4>{job.title}</h4>
            <JobInfo>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Type:</strong> {job.type}</p>
              <p><strong>Salary:</strong> {job.salary}</p>
              <p><strong>Applications:</strong> {jobApplicationsWithUsers[job.id]?.length || 0}</p>
            </JobInfo>
            
            <ApplicationsList>
              {jobApplicationsWithUsers[job.id]?.map(application => (
                <ApplicationItem key={application.id}>
                  <ApplicationDetails>
                    <h5>Application from {application.applicantName}</h5>
                    <p><strong>Email:</strong> {application.applicantEmail}</p>
                    <p><strong>Submitted:</strong> {new Date(application.submittedAt).toLocaleDateString()}</p>
                    <p><strong>Motivation Letter:</strong></p>
                    <p>{application.motivationLetter}</p>
                  </ApplicationDetails>
                  <MessageButton onClick={() => handleMessageClick(application)}>
                    Message Applicant
                  </MessageButton>
                </ApplicationItem>
              ))}
            </ApplicationsList>

            <JobActions>
              <Button onClick={() => handleDeleteJob(job.id)} className="delete">
                Delete
              </Button>
            </JobActions>
          </JobCard>
        ))}
      </JobList>

      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>

      <Container>
        <Title>Applications Received</Title>
        <ApplicationsGrid>
          {applications.map(application => (
            <ApplicationCard key={application.id}>
              <ApplicantName>{application.applicantName}</ApplicantName>
              <ApplicationInfo>
                <p>Position: {application.jobTitle}</p>
                <p>Applied: {new Date(application.timestamp?.toDate()).toLocaleDateString()}</p>
              </ApplicationInfo>
              <MessageButton onClick={() => handleMessageClick(application)}>
                Message Applicant
              </MessageButton>
            </ApplicationCard>
          ))}
        </ApplicationsGrid>
      </Container>

      {showMessageModal && selectedApplication && (
        <Modal>
          <ModalContent>
            <CloseButton onClick={() => setShowMessageModal(false)}>&times;</CloseButton>
            <h3>Messaging {selectedApplication.applicantName}</h3>
            <MessageBox
              applicationId={selectedApplication.id}
              senderId={currentUser.uid}
              receiverId={selectedApplication.userId || selectedApplication.applicantId}
            />
          </ModalContent>
        </Modal>
      )}
    </DashboardContainer>
  );
};

export default EmployerDashboard; 