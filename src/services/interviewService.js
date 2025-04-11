// File: /home/martin/Development/job_helper_web/src/services/interviewService.js
import { collection, getDocs, addDoc, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';

// Get interview questions for a specific job type
export const getInterviewQuestions = async (jobType) => {
  try {
    const q = query(collection(db, "interviews"), where("jobType", "==", jobType));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      // No questions found, create some sample ones
      await createSampleInterview(jobType);
      
      // Try again after creating samples
      const newSnapshot = await getDocs(q);
      if (newSnapshot.empty) {
        return null;
      }
      
      const doc = newSnapshot.docs[0];
      return {
        id: doc.id,
        ...doc.data()
      };
    }
    
    const doc = querySnapshot.docs[0];
    return {
      id: doc.id,
      ...doc.data()
    };
  } catch (error) {
    console.error(`Error getting interview questions for ${jobType}:`, error);
    return null;
  }
};

// Create sample interview questions
const createSampleInterview = async (jobType) => {
  const interviewsRef = collection(db, "interviews");
  
  let sampleData = {
    jobType: jobType,
    title: "Sample Interview",
    description: "Practice these common interview questions",
    questions: []
  };
  
  // Default questions for any job type
  const defaultQuestions = [
    {
      question: "Tell me about yourself.",
      tips: [
        "Keep it professional and relevant to the job",
        "Highlight key experiences and strengths",
        "Be concise - aim for 1-2 minutes"
      ]
    },
    {
      question: "Why are you interested in this position?",
      tips: [
        "Research the company beforehand",
        "Connect the job to your career goals",
        "Show enthusiasm for the specific role"
      ]
    },
    {
      question: "What are your strengths and weaknesses?",
      tips: [
        "Choose strengths relevant to the job",
        "For weaknesses, show how you're working to improve",
        "Be honest but strategic"
      ]
    }
  ];
  
  // Add job-specific questions based on jobType
  switch (jobType) {
    case "customer-service":
      sampleData.title = "Customer Service Interview";
      sampleData.description = "Practice these common customer service interview questions";
      sampleData.questions = [
        ...defaultQuestions,
        {
          question: "How would you handle an angry customer?",
          tips: [
            "Stay calm and listen actively",
            "Show empathy and understanding",
            "Focus on finding a solution"
          ]
        },
        {
          question: "Describe a time you went above and beyond for a customer.",
          tips: [
            "Use the STAR method (Situation, Task, Action, Result)",
            "Highlight positive outcomes",
            "Show your commitment to customer satisfaction"
          ]
        }
      ];
      break;
      
    case "web-developer":
      sampleData.title = "Web Developer Interview";
      sampleData.description = "Practice these common web development interview questions";
      sampleData.questions = [
        ...defaultQuestions,
        {
          question: "Explain the difference between HTML, CSS, and JavaScript.",
          tips: [
            "Be clear about each language's purpose",
            "Use simple analogies if possible",
            "Mention how they work together"
          ]
        },
        {
          question: "How do you approach responsive design?",
          tips: [
            "Mention mobile-first approach",
            "Talk about CSS media queries",
            "Discuss frameworks you've used (if any)"
          ]
        }
      ];
      break;
      
    default:
      sampleData.questions = defaultQuestions;
  }
  
  await addDoc(interviewsRef, sampleData);
  console.log(`Sample interview for ${jobType} created successfully`);
};