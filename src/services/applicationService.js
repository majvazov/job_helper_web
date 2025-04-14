import { collection, addDoc, getDocs, query, where, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

// Submit a job application
export const submitApplication = async (jobId, userId, applicationData) => {
  try {
    const applicationsRef = collection(db, 'applications');
    const application = {
      jobId,
      userId,
      ...applicationData,
      status: 'pending',
      submittedAt: new Date().toISOString()
    };
    
    const docRef = await addDoc(applicationsRef, application);
    return { id: docRef.id, ...application };
  } catch (error) {
    console.error('Error submitting application:', error);
    throw error;
  }
};

// Get applications for a specific job
export const getJobApplications = async (jobId) => {
  try {
    const applicationsRef = collection(db, 'applications');
    const q = query(applicationsRef, where('jobId', '==', jobId));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting job applications:', error);
    return [];
  }
};

// Get applications submitted by a user
export const getUserApplications = async (userId) => {
  try {
    const applicationsRef = collection(db, 'applications');
    const q = query(applicationsRef, where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting user applications:', error);
    return [];
  }
};