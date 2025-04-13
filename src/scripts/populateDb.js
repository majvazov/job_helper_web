import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, deleteDoc, addDoc } from 'firebase/firestore';
import { firebaseConfig } from '../firebase/config.js';
import interviewData from '../data/interviewData.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to clear existing data
const clearInterviews = async () => {
  console.log('Clearing existing interview data...');
  const interviewsRef = collection(db, "interviews");
  const snapshot = await getDocs(interviewsRef);
  
  const deletePromises = snapshot.docs.map(doc => deleteDoc(doc.ref));
  await Promise.all(deletePromises);
  console.log('Existing data cleared.');
};

// Function to populate data
const populateInterviews = async () => {
  console.log('Starting to populate interview data...');
  const interviewsRef = collection(db, "interviews");
  
  for (const [jobType, data] of Object.entries(interviewData)) {
    console.log(`Creating interview data for ${jobType}...`);
    
    try {
      const docRef = await addDoc(interviewsRef, {
        jobType,
        title: data.title,
        description: data.description,
        questions: data.questions
      });
      console.log(`Created interview data for ${jobType} with ID:`, docRef.id);
    } catch (error) {
      console.error(`Error creating interview data for ${jobType}:`, error);
    }
  }
  
  console.log('Finished populating all interview data!');
};

// Run the population
const run = async () => {
  try {
    await clearInterviews();
    await populateInterviews();
    console.log('Successfully populated the database!');
  } catch (error) {
    console.error('Error during database population:', error);
  } finally {
    process.exit();
  }
};

run(); 