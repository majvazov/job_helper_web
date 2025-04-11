import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import interviewData from '../data/interviewData';

// Check if data already exists to avoid duplicates
export const importInterviewData = async () => {
  try {
    // First check if data already exists
    const querySnapshot = await getDocs(collection(db, "interviews"));
    if (!querySnapshot.empty) {
      console.log("Interview data already exists in Firestore");
      return;
    }
    
    // If collection is empty, import data
    const interviewsRef = collection(db, "interviews");
    
    for (const [key, data] of Object.entries(interviewData)) {
      await addDoc(interviewsRef, {
        jobType: key,
        title: data.title,
        description: data.description,
        questions: data.questions
      });
    }
    
    console.log("Interview data imported successfully");
  } catch (error) {
    console.error("Error importing interview data:", error);
  }
};