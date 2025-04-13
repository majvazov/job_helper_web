// File: /home/martin/Development/job_helper_web/src/services/interviewService.js
import { collection, getDocs, addDoc, query, where, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase/config.js';
import interviewData from '../data/interviewData.js';

// Get interview questions for a specific job type
export const getInterviewQuestions = async (jobType) => {
  try {
    // First try to get data from Firebase
    const interviewsRef = collection(db, "interviews");
    const q = query(interviewsRef, where("jobType", "==", jobType));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      // If no data in Firebase, create it using the predefined data
      console.log('Creating interview data in Firebase for:', jobType);
      const data = interviewData[jobType];
      
      if (!data) {
        console.error(`No predefined data found for job type: ${jobType}`);
        return null;
      }
      
      // Create the interview document with all required fields
      const interviewDoc = {
        jobType: jobType,
        title: data.title,
        description: data.description,
        questions: data.questions.map(q => ({
          question: q.question,
          tips: q.tips || [],
          goodFeedback: q.goodFeedback,
          badFeedback: q.badFeedback
        }))
      };
      
      // Store in Firebase
      try {
        const docRef = await addDoc(interviewsRef, interviewDoc);
        console.log('Interview data created with ID:', docRef.id);
        
        // Return the newly created data
        return {
          id: docRef.id,
          ...interviewDoc
        };
      } catch (error) {
        console.error('Error storing interview data:', error);
        return null;
      }
    }
    
    // Return existing data
    const doc = querySnapshot.docs[0];
    const existingData = doc.data();
    console.log('Retrieved interview data:', existingData);
    return {
      id: doc.id,
      ...existingData
    };
  } catch (error) {
    console.error(`Error getting interview questions for ${jobType}:`, error);
    return null;
  }
};

// Function to clear all interview data
export const clearInterviewData = async () => {
  console.log('Clearing existing interview data...');
  const interviewsRef = collection(db, "interviews");
  const querySnapshot = await getDocs(interviewsRef);
  
  const deletePromises = querySnapshot.docs.map(doc => deleteDoc(doc.ref));
  await Promise.all(deletePromises);
  console.log('All interview data cleared!');
};

// Function to populate all interview data into Firebase
export const populateInterviewData = async (forceRefresh = false) => {
  console.log('Starting to populate interview data...');
  
  if (forceRefresh) {
    await clearInterviewData();
  }
  
  const jobTypes = Object.keys(interviewData);
  
  for (const jobType of jobTypes) {
    console.log(`Populating data for ${jobType}...`);
    const data = interviewData[jobType];
    
    // Create the interview document with all required fields
    const interviewDoc = {
      jobType: jobType,
      title: data.title,
      description: data.description,
      questions: data.questions.map(q => ({
        question: q.question,
        tips: q.tips || [],
        goodFeedback: q.goodFeedback,
        badFeedback: q.badFeedback
      }))
    };
    
    // Store in Firebase
    try {
      const interviewsRef = collection(db, "interviews");
      const docRef = await addDoc(interviewsRef, interviewDoc);
      console.log('Created interview data with ID:', docRef.id);
    } catch (error) {
      console.error(`Error creating interview data for ${jobType}:`, error);
    }
  }
  
  console.log('Finished populating all interview data!');
};