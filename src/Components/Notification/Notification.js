import React, { useState } from 'react';
import './Notification.css'; // Ensure this file has the CSS for positioning and styling the notification

const Notification = () => {
  const [showNotification, setShowNotification] = useState(true);

  // Hardcoded appointment data
  const appointmentData = {
    doctorName: 'Dr. Denis Raj',
    speciality: 'Dentist',
    patientName: 'Peter',
    phoneNumber: '1234567890',
    date: '2023-07-24',
    time: '9:00 AM'
  };

  // Function to dismiss the notification
  const dismissNotification = () => {
    setShowNotification(false);
  };

  // Render only if showNotification is true
  if (!showNotification) return null;

  return (
    <div className="notification-overlay">
      <div className="notification-content">
        <h3>Appointment Details</h3>
        <p><strong>Doctor:</strong> {appointmentData.doctorName}</p>
        <p><strong>Speciality:</strong> {appointmentData.speciality}</p>
        <p><strong>Name:</strong> {appointmentData.patientName}</p>
        <p><strong>Phone Number:</strong> {appointmentData.phoneNumber}</p>
        <p><strong>Date:</strong> {appointmentData.date}</p>
        <p><strong>Time Slot:</strong> {appointmentData.time}</p>
        <button onClick={dismissNotification}>Dismiss Notification</button>
      </div>
    </div>
  );
};

export default Notification;
