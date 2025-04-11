import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import JobGrid from './components/JobGrid';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import InterviewModal from './components/InterviewModal';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app">
          <Header />
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<JobGrid />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route 
                path="/profile" 
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                } 
              />
              <Route path="/interview/:jobType" element={<InterviewModal />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;