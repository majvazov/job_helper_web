import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/config';
import { createEmployerProfile } from '../services/employerService';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userType, setUserType] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register function
  const register = async (email, password, userData, type = 'jobseeker') => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update user profile
      await updateProfile(user, {
        displayName: type === 'employer' ? userData.companyName : `${userData.firstName} ${userData.lastName}`
      });

      // Create user profile in Firestore
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, {
        email,
        userType: type,
        ...userData,
        createdAt: new Date().toISOString()
      });

      // If employer, create additional employer profile
      if (type === 'employer') {
        await createEmployerProfile(user.uid, {
          companyName: userData.companyName,
          email: email,
          phone: userData.phone || '',
          address: userData.address || '',
          website: userData.website || '',
          description: userData.description || ''
        });
      }

      return userCredential;
    } catch (error) {
      console.error('Error in registration:', error);
      throw error;
    }
  };

  // Login function
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout function
  const logout = () => {
    return signOut(auth);
  };

  // Get user type
  const getUserType = async (uid) => {
    try {
      const userRef = doc(db, 'users', uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        return userSnap.data().userType;
      }
      return null;
    } catch (error) {
      console.error('Error getting user type:', error);
      return null;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const type = await getUserType(user.uid);
        setUserType(type);
      } else {
        setUserType(null);
      }
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userType,
    register,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};