import React from 'react';
import './DoctorCard.css';

const DoctorCard = ({ name, speciality, experience, ratings, image }) => {
  return (
    <div className="doctor-card-container">
      <div className="doctor-card-details-container">
        <div className="doctor-card-profile-image-container">
          <img 
            src={image || "/default_doctor_avatar.png"} // Adjust to use your placeholder path
            alt={name} 
            className="doctor-avatar"
            onError={(e) => (e.target.src = "/default_doctor_avatar.png")} // Fallback in case of an error
          />
        </div>
        <div className="doctor-card-details">
          <h3 className="doctor-card-detail-name">{name}</h3>
          <p className="doctor-card-detail-speciality">{speciality}</p>
          <p className="doctor-card-detail-experience">{experience} years experience</p>
          <p className="doctor-card-detail-ratings">
            Ratings: <span className="rating-stars">{"★".repeat(ratings)}</span>
          </p>
        </div>
        <div className="doctor-card-book">
          <button className="book-appointment-btn">
            <div>Book Appointment</div>
            <div>No Booking Fee</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
