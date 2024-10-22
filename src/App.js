import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import EducationPage from './pages/EducationPage';
import TrainingPage from './pages/TrainingPage';
import IncidentReportPage from './pages/IncidentReportPage';
//import Footer from './components/Footer'; // Import the footer
//import './styles/App.css'; // This should match the path where App.css is located

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/incident-report" element={<IncidentReportPage />} />
      </Routes>
     
    </Router>
  );
}

export default App;