// File: /home/martin/Development/job_helper_web/src/services/userService.js
import { doc, getDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { db } from '../firebase/config';

// Get user profile
export const getUserProfile = async (userId) => {
  try {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      };
    } else {
      console.log("No such user!");
      return null;
    }
  } catch (error) {
    console.error("Error getting user profile:", error);
    return null;
  }
};

// Save a job to user's saved jobs
export const saveJob = async (userId, job) => {
  try {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, {
      savedJobs: arrayUnion(job)
    });
    return true;
  } catch (error) {
    console.error("Error saving job:", error);
    return false;
  }
};

// Remove a job from user's saved jobs
export const removeJob = async (userId, job) => {
  try {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, {
      savedJobs: arrayRemove(job)
    });
    return true;
  } catch (error) {
    console.error("Error removing job:", error);
    return false;
  }
};