import React from 'react';
import './Navbar.css'; // Ensure the CSS file is imported for styling
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="nav-item">Home</Link>
      <Link to="/appointments" className="nav-item">Appointments</Link>
      <Link to="/signup" className="nav-item">Sign Up</Link>
      <Link to="/login" className="nav-item">Login</Link>
      <Link to="/instant-consultation" className="nav-item">Instant Consultation</Link>
      <div className="dropdown">
            <button className="dropbtn">User Profile</button>
            <div className="dropdown-content">
                <Link to="/profile">Profile</Link>
                <Link to="/reports">Your Reports</Link>
            </div>
      </div>
    </div>
  );
};

export default Navbar;
