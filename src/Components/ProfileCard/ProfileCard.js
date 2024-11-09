import React, { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import './ProfileCard.css';

const ProfileCard = () => {
  const [userDetails, setUserDetails] = useState({});
  const [updatedDetails, setUpdatedDetails] = useState({});
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  // Fetch user profile when component mounts
useEffect(() => {
  const authtoken = sessionStorage.getItem("auth-token");
  if (!authtoken) {
    console.warn("No auth token found; ensure you're logged in");
    // Temporarily comment out this line to prevent redirection while debugging
    // navigate("/login");
  } else {
    fetchUserProfile();
  }
}, [navigate]);


  const fetchUserProfile = async () => {
    try {
      const authtoken = sessionStorage.getItem("auth-token");
      const email = sessionStorage.getItem("email");
      if (authtoken && email) {
        const response = await fetch(`${API_URL}/api/auth/user`, {
          headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Email": email,
          },
        });
        if (response.ok) {
          const user = await response.json();
          setUserDetails(user);
          setUpdatedDetails(user); // Initialize updatedDetails for editing
        } else {
          throw new Error("Failed to fetch user profile");
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Toggle to edit mode
  const handleEdit = () => setEditMode(true);

  // Handle form input changes
  const handleInputChange = (e) => {
    setUpdatedDetails({
      ...updatedDetails,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission for updating profile
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const authtoken = sessionStorage.getItem("auth-token");
      const email = sessionStorage.getItem("email");
      if (authtoken && email) {
        const response = await fetch(`${API_URL}/api/auth/user`, {
          method: "PUT",
          headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Email": email,
          },
          body: JSON.stringify(updatedDetails),
        });
        if (response.ok) {
          sessionStorage.setItem("name", updatedDetails.name);
          sessionStorage.setItem("phone", updatedDetails.phone);
          setUserDetails(updatedDetails);
          setEditMode(false);  // Switch back to view mode after saving
          alert("Profile updated successfully!");
        } else {
          throw new Error("Failed to update profile");
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="profile-container">
      {editMode ? (
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={updatedDetails.name || ''}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={updatedDetails.phone || ''}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={updatedDetails.email || ''}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="save-button">Save</button>
        </form>
      ) : (
        <div className="profile-details">
          <h2>Welcome, {userDetails.name}</h2>
          <p><b>Email:</b> {userDetails.email}</p>
          <p><b>Phone:</b> {userDetails.phone}</p>
          <button onClick={handleEdit} className="edit-button">Edit</button>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
