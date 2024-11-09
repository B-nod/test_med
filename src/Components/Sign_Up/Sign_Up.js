import React, { useState } from 'react';
import './Sign_Up.css';

const Sign_Up = () => {
  // Initialize state for form data and error handling
  const [formData, setFormData] = useState({ role: '', name: '', phone: '', email: '', password: '' });
  const [error, setError] = useState('');

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.role || !formData.name || !formData.phone || !formData.email || !formData.password) {
      setError('Please fill in all required fields');
      return;
    }
    setError('');
    // Proceed with form submission logic (e.g., API call)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="signup-container">
      <div className="container" style={{ marginTop: '5%' }}>
        <div className="signup-grid">
          <div className="signup-text">
            <h1>Sign Up</h1>
          </div>
          <div className="signup-text1" style={{ textAlign: 'left' }}>
            Already a member? <span><a href="../Login/Login.html" style={{ color: '#2190FF' }}>Login</a></span>
          </div>
          <div className="signup-form">
            <form onSubmit={handleSubmit}>
              {error && <p className="error-message">{error}</p>}
              <div className="form-group">
                <label htmlFor="role">Role</label>
                <select
                  name="role"
                  id="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="form-control"
                >
                  <option value="">Select Role</option>
                  <option value="doctor">Doctor</option>
                  <option value="patient">Patient</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="form-control"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="form-control"
                  placeholder="Enter your password"
                />
              </div>
              <div className="btn-group">
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="reset" className="btn btn-danger">Reset</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign_Up;
