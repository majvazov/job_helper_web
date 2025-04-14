import { collection, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

// Create or update employer profile
export const createEmployerProfile = async (userId, profileData) => {
  try {
    const employerRef = doc(db, 'employers', userId);
    await setDoc(employerRef, {
      ...profileData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    return { id: userId, ...profileData };
  } catch (error) {
    console.error('Error creating employer profile:', error);
    throw error;
  }
};

// Get employer profile
export const getEmployerProfile = async (userId) => {
  try {
    const employerRef = doc(db, 'employers', userId);
    const employerSnap = await getDoc(employerRef);
    
    if (employerSnap.exists()) {
      return {
        id: employerSnap.id,
        ...employerSnap.data()
      };
    }
    return null;
  } catch (error) {
    console.error('Error getting employer profile:', error);
    return null;
  }
};

// Update employer profile
export const updateEmployerProfile = async (userId, updates) => {
  try {
    const employerRef = doc(db, 'employers', userId);
    await updateDoc(employerRef, {
      ...updates,
      updatedAt: new Date().toISOString()
    });
    return { id: userId, ...updates };
  } catch (error) {
    console.error('Error updating employer profile:', error);
    throw error;
  }
}; 