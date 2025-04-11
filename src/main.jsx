import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { importInterviewData } from './utils/importData';

// Import interview data to Firestore (will only import if data doesn't exist)
importInterviewData();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);