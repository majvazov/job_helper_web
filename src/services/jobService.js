// File: /home/martin/Development/job_helper_web/src/services/jobService.js
import { collection, getDocs, doc, getDoc, addDoc, query, where, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/config.js';

// Initialize database with sample jobs
export const initializeDatabase = async () => {
  try {
    // Check if jobs already exist
    const jobsCollection = collection(db, 'jobs');
    const jobSnapshot = await getDocs(jobsCollection);
    
    if (!jobSnapshot.empty) {
      console.log('Jobs already exist in the database.');
      return;
    }

    console.log('Adding sample jobs...');
    await addSampleJobs();
    console.log('Sample jobs added successfully!');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};

// Get all jobs
const getAllJobs = async () => {
  try {
    const jobsCollection = collection(db, 'jobs');
    const jobSnapshot = await getDocs(jobsCollection);
    return jobSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting jobs:', error);
    return [];
  }
};

// Get job by ID
const getJobById = async (jobId) => {
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

// Get jobs posted by an employer
const getEmployerJobs = async (employerId) => {
  try {
    const jobsCollection = collection(db, 'jobs');
    const q = query(jobsCollection, where("employerId", "==", employerId));
    const jobSnapshot = await getDocs(q);
    return jobSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting employer jobs:', error);
    return [];
  }
};

// Post a new job
const postJob = async (jobData) => {
  try {
    const jobsCollection = collection(db, 'jobs');
    const docRef = await addDoc(jobsCollection, {
      ...jobData,
      createdAt: new Date().toISOString(),
      status: 'active'
    });
    return {
      id: docRef.id,
      ...jobData
    };
  } catch (error) {
    console.error('Error posting job:', error);
    throw error;
  }
};

// Update a job
const updateJob = async (jobId, updates) => {
  try {
    const jobRef = doc(db, 'jobs', jobId);
    await updateDoc(jobRef, updates);
    return true;
  } catch (error) {
    console.error('Error updating job:', error);
    throw error;
  }
};

// Delete a job
const deleteJob = async (jobId) => {
  try {
    const jobRef = doc(db, 'jobs', jobId);
    await deleteDoc(jobRef);
    return true;
  } catch (error) {
    console.error('Error deleting job:', error);
    throw error;
  }
};

// Add some sample jobs
const addSampleJobs = async () => {
  const sampleJobs = [
    {
      title: "Customer Service Representative",
      company: "TechSupport Inc.",
      location: "Remote",
      description: "Entry-level customer service position. No experience required. Full training provided.",
      requirements: ["High school diploma", "Good communication skills", "Basic computer knowledge"],
      type: "Full-time",
      salary: "$30,000 - $35,000",
      benefits: ["Health insurance", "401k", "Paid time off"],
      category: "customer-service"
    },
    {
      title: "Junior Web Developer",
      company: "WebDev Solutions",
      location: "New York, NY",
      description: "Looking for passionate individuals to join our web development team. Will provide training.",
      requirements: ["Basic HTML/CSS knowledge", "Willingness to learn", "Problem-solving skills"],
      type: "Full-time",
      salary: "$45,000 - $55,000",
      benefits: ["Health insurance", "Remote work options", "Professional development"],
      category: "web-developer"
    },
    {
      title: "Sales Associate",
      company: "Retail Plus",
      location: "Chicago, IL",
      description: "Entry-level sales position in retail. Training provided for the right candidate.",
      requirements: ["High school diploma", "Customer-oriented", "Flexible schedule"],
      type: "Full-time",
      salary: "$28,000 - $32,000 + Commission",
      benefits: ["Employee discount", "Flexible scheduling", "Growth opportunities"],
      category: "sales"
    },
    {
      title: "Administrative Assistant",
      company: "Corporate Services LLC",
      location: "Remote",
      description: "Entry-level administrative position. Will train the right candidate.",
      requirements: ["Basic MS Office skills", "Organization skills", "Professional communication"],
      type: "Full-time",
      salary: "$32,000 - $38,000",
      benefits: ["Health insurance", "Paid holidays", "Professional development"],
      category: "admin"
    },
    {
      title: "Data Entry Specialist",
      company: "DataCorp",
      location: "Remote",
      description: "Looking for detail-oriented individuals for data entry position. No prior experience needed.",
      requirements: ["Typing speed 40 WPM", "Attention to detail", "Basic computer skills"],
      type: "Full-time",
      salary: "$30,000 - $35,000",
      benefits: ["Flexible hours", "Health benefits", "Remote work"],
      category: "data-entry"
    }
  ];

  try {
    for (const job of sampleJobs) {
      await postJob(job);
    }
    return true;
  } catch (error) {
    console.error('Error adding sample jobs:', error);
    return false;
  }
};

export {
  getAllJobs,
  getJobById,
  getEmployerJobs,
  postJob,
  updateJob,
  deleteJob,
  addSampleJobs
};