// filepath: /home/martin/Development/job_helper_web/scripts/addMoreJobs.js
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../src/firebase/config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Employer ID from the provided screenshot
const EMPLOYER_ID = "9sK7oZ14euWFCY6mLD2qSceNodj2";

const addMoreJobs = async () => {
  const jobsCollection = collection(db, 'jobs');
  
  const newJobs = [
    {
      title: "Front Desk Receptionist",
      company: "Default Company Name",
      location: "everywhere",
      description: "Entry-level front desk position with training. Great opportunity to develop customer service skills.",
      requirements: ["no"],
      type: "Full-time",
      salary: "32000",
      benefits: ["no"],
      category: "customer-service",
      employerId: EMPLOYER_ID,
      status: "active",
      createdAt: new Date().toISOString()
    },
    {
      title: "Sales Representative",
      company: "Default Company Name",
      location: "everywhere",
      description: "Entry-level sales position with full training program. Earn competitive base salary plus commission.",
      requirements: ["no"],
      type: "Full-time",
      salary: "36000",
      benefits: ["no"],
      category: "sales",
      employerId: EMPLOYER_ID,
      status: "active",
      createdAt: new Date().toISOString()
    },
    {
      title: "Junior Marketing Assistant",
      company: "Default Company Name",
      location: "everywhere",
      description: "Learn marketing fundamentals in a supportive environment. No experience needed.",
      requirements: ["no"],
      type: "Full-time",
      salary: "34000",
      benefits: ["no"],
      category: "marketing",
      employerId: EMPLOYER_ID,
      status: "active",
      createdAt: new Date().toISOString()
    },
    {
      title: "Data Entry Clerk",
      company: "Default Company Name",
      location: "everywhere",
      description: "Entry-level data entry position. Training provided on all systems.",
      requirements: ["no"],
      type: "Full-time",
      salary: "31000",
      benefits: ["no"],
      category: "admin",
      employerId: EMPLOYER_ID,
      status: "active",
      createdAt: new Date().toISOString()
    },
    {
      title: "Warehouse Assistant",
      company: "Default Company Name",
      location: "everywhere",
      description: "Entry-level warehouse position. Learn inventory management and logistics.",
      requirements: ["no"],
      type: "Full-time",
      salary: "33000",
      benefits: ["no"],
      category: "warehouse",
      employerId: EMPLOYER_ID,
      status: "active",
      createdAt: new Date().toISOString()
    }
  ];

  console.log('Adding more jobs...');
  
  try {
    for (const job of newJobs) {
      await addDoc(jobsCollection, job);
      console.log(`Added job: ${job.title}`);
    }
    console.log('All new jobs added successfully!');
    return true;
  } catch (error) {
    console.error('Error adding new jobs:', error);
    return false;
  }
};

// Execute the function
console.log('Starting job creation process...');
try {
  await addMoreJobs();
} catch (error) {
  console.error('Error in job creation script:', error);
}