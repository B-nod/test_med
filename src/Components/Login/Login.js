import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  // Initialize state for form data and error handling
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  // Function to handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Please fill in all required fields');
      return;
    }
    setError('');
    // Proceed with form submission logic (e.g., API call)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="Login-container">
      <div className="container">
        <div className="login-grid">
          <div className="login-text">
            <h2>Login</h2>
          </div>
          <div className="login-text">
            Are you a new member? <span><a href="../Sign_Up/Sign_Up.html" style={{ color: '#2190FF' }}>Sign Up Here</a></span>
          </div>
          <br />
          <div className="login-form">
            <form onSubmit={handleSubmit}>
              {error && <p className="error-message">{error}</p>}
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
                <button type="submit" className="btn btn-primary">Login</button>
                <button type="reset" className="btn btn-danger">Reset</button>
              </div>
              <br />
              <div className="login-text">Forgot Password?</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
