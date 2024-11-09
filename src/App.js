//import logo from './logo.svg'; 
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import React, { useEffect } from 'react';
// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import ProfileCard from './Components/ProfileCard/ProfileCard';
import ReportsLayout from './Components/ReportsLayout/ReportsLayout';
import Notification from './Components/Notification/Notification';
import ReviewForm from './Components/ReviewForm/ReviewForm';
import Reviews from './Components/Reviews/Reviews';

function App() {

  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
            <ReviewForm />
            <Reviews />
            <div>
                <Notification /> {/* Place Notification in a separate div */}
            </div>
            <Navbar/>
            {/* Set up the Routes for different pages */}
            <Routes>
                <Route path="/" element={<Landing_Page />} />
                <Route path="/signup" element={<Sign_Up />} />
                <Route path="/login" element={<Login />} />
                <Route path="/instant-consultation" element={<InstantConsultation />} />
                <Route path="/profile" element={<ProfileCard />} />
                <Route path="/reports" element={<ReportsLayout />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
