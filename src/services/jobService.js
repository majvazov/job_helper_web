// File: /home/martin/Development/job_helper_web/src/services/jobService.js
import { collection, getDocs, doc, getDoc, addDoc, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';

// Get all jobs
export const getAllJobs = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "jobs"));
    
    // If no jobs exist, create sample jobs
    if (querySnapshot.empty) {
      await createSampleJobs();
      const newSnapshot = await getDocs(collection(db, "jobs"));
      const jobs = [];
      newSnapshot.forEach((doc) => {
        jobs.push({
          id: doc.id,
          ...doc.data()
        });
      });
      return jobs;
    }
    
    const jobs = [];
    querySnapshot.forEach((doc) => {
      jobs.push({
        id: doc.id,
        ...doc.data()
      });
    });
    return jobs;
  } catch (error) {
    console.error("Error getting jobs:", error);
    return [];
  }
};

// Get job by ID
export const getJobById = async (jobId) => {
  try {
    const docRef = doc(db, "jobs", jobId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      };
    } else {
      console.log("No such job!");
      return null;
    }
  } catch (error) {
    console.error("Error getting job:", error);
    return null;
  }
};

// Create sample jobs for first-time setup
const createSampleJobs = async () => {
  const jobsRef = collection(db, "jobs");
  
  const sampleJobs = [
    {
      title: "Customer Service Representative",
      company: "ServiceFirst Inc.",
      jobType: "customer-service",
      description: "Entry-level position helping customers with inquiries and resolving issues.",
      tags: ["Entry Level", "No Experience Required", "Customer Service"],
      location: "Remote"
    },
    {
      title: "Junior Web Developer",
      company: "TechStart Solutions",
      jobType: "web-developer",
      description: "Learn and grow as a web developer in a supportive team environment.",
      tags: ["Entry Level", "Web Development", "HTML/CSS/JS"],
      location: "San Francisco, CA"
    },
    {
      title: "Sales Associate",
      company: "RetailPlus",
      jobType: "sales",
      description: "Help customers find products that meet their needs while learning sales techniques.",
      tags: ["Entry Level", "Retail", "Sales"],
      location: "Various Locations"
    },
    {
      title: "Administrative Assistant",
      company: "OfficeWorks Corp",
      jobType: "admin",
      description: "Support office operations and learn essential administrative skills.",
      tags: ["Entry Level", "Office Work", "Organization"],
      location: "Chicago, IL"
    }
  ];
  
  for (const job of sampleJobs) {
    await addDoc(jobsRef, job);
  }
  
  console.log("Sample jobs created successfully");
};