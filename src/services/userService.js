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

// Get user by ID (used for messaging)
export const getUserById = async (userId) => {
  try {
    console.log("Fetching user data for:", userId);
    if (!userId) {
      console.error("No userId provided to getUserById");
      return null;
    }
    
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const userData = docSnap.data();
      // Create a proper display name based on available data
      let displayName = null;
      
      if (userData.userType === 'employer' && userData.companyName) {
        displayName = userData.companyName;
      } else if (userData.firstName || userData.lastName) {
        displayName = `${userData.firstName || ''} ${userData.lastName || ''}`.trim();
      } else if (userData.displayName) {
        displayName = userData.displayName;
      } else if (userData.email) {
        // Use email but hide part of it for privacy
        const emailParts = userData.email.split('@');
        displayName = `${emailParts[0]}@...`;
      }
      
      console.log(`Found user ${userId} with display name: ${displayName || 'Unknown'}`);
      
      return {
        id: docSnap.id,
        displayName: displayName || 'Unknown User',
        email: userData.email,
        userType: userData.userType,
        ...userData
      };
    } else {
      console.log(`No user found with ID: ${userId}`);
      return {
        id: userId,
        displayName: 'Unknown User'
      };
    }
  } catch (error) {
    console.error("Error getting user by ID:", error);
    return {
      id: userId,
      displayName: 'Unknown User (Error)'
    };
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