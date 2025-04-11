import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import JobGrid from './components/JobGrid';
import InterviewModal from './components/InterviewModal';
import Footer from './components/Footer';
import './styles/index.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentJobType, setCurrentJobType] = useState('customer-service');
  const [searchResults, setSearchResults] = useState(null);
  
  // Sample job data
  const jobs = [
    {
      title: 'Customer Service Representative',
      company: 'TechSupport Inc.',
      description: 'Assist customers with product inquiries and resolve issues through phone and chat support.',
      tags: ['Remote', 'Full-time', 'Entry-level'],
      postedTime: '2 days ago',
      type: 'customer-service'
    },
    {
      title: 'Junior Web Developer',
      company: 'CodeCraft Solutions',
      description: 'Build and maintain websites using HTML, CSS, and basic JavaScript. Training provided.',
      tags: ['On-site', 'Full-time', 'Entry-level'],
      postedTime: '1 week ago',
      type: 'web-developer'
    },
    {
      title: 'Sales Associate',
      company: 'Retail Ventures',
      description: 'Engage with customers and assist with product selection. No previous sales experience required.',
      tags: ['On-site', 'Part-time', 'Entry-level'],
      postedTime: '3 days ago',
      type: 'sales'
    },
    {
      title: 'Administrative Assistant',
      company: 'Global Enterprises',
      description: 'Support the office with scheduling, data entry, and general administrative tasks.',
      tags: ['Hybrid', 'Full-time', 'Entry-level'],
      postedTime: '5 days ago',
      type: 'admin'
    },
    {
      title: 'Data Entry Specialist',
      company: 'DataForce Solutions',
      description: 'Input and process information into company databases. Training provided on all systems.',
      tags: ['Remote', 'Part-time', 'Entry-level'],
      postedTime: '1 day ago',
      type: 'data-entry'
    },
    {
      title: 'Social Media Assistant',
      company: 'Digital Marketing Agency',
      description: 'Help create and schedule content for various social media platforms. Knowledge of social media required.',
      tags: ['Remote', 'Full-time', 'Entry-level'],
      postedTime: '4 days ago',
      type: 'social-media'
    }
  ];

  const handleSearch = (query) => {
    if (!query) {
      setSearchResults(null);
      return;
    }
    
    const filteredJobs = jobs.filter(job => 
      job.title.toLowerCase().includes(query.toLowerCase()) ||
      job.company.toLowerCase().includes(query.toLowerCase()) ||
      job.description.toLowerCase().includes(query.toLowerCase()) ||
      job.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
    
    setSearchResults(filteredJobs);
  };

  const handleInterviewClick = (jobType) => {
    setCurrentJobType(jobType);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const displayedJobs = searchResults || jobs;

  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Hero onPracticeClick={() => handleInterviewClick('customer-service')} />
        <SearchBar onSearch={handleSearch} />
        <JobGrid 
          jobs={displayedJobs} 
          onInterviewClick={handleInterviewClick} 
        />
        <InterviewModal 
          isOpen={isModalOpen} 
          jobType={currentJobType} 
          onClose={handleCloseModal} 
        />
      </main>
      <Footer />
    </>
  );
}

export default App;