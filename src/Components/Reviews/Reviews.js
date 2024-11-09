import React, { useState } from 'react';
import ReviewForm from '../ReviewForm/ReviewForm'; // Import the ReviewForm component
import './Reviews.css';

const Reviews = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [submittedReviews, setSubmittedReviews] = useState({}); // Track submitted reviews

  // Sample list of doctors for the table
  const doctors = [
    { id: 1, name: 'Dr. John Doe', speciality: 'Cardiology' },
    { id: 2, name: 'Dr. Jane Smith', speciality: 'Dermatology' },
  ];

  // Handle click event to open the ReviewForm for a specific doctor
  const handleProvideFeedback = (doctor) => {
    setSelectedDoctor(doctor);
  };

  // Handle form submission from ReviewForm
  const handleReviewSubmit = (doctorId, reviewData) => {
    setSubmittedReviews((prevReviews) => ({
      ...prevReviews,
      [doctorId]: reviewData,
    }));
    setSelectedDoctor(null); // Close the form after submission
  };

  return (
    <div className="reviews">
      <h2>Reviews</h2>
      <table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Doctor Name</th>
            <th>Doctor Speciality</th>
            <th>Provide Feedback</th>
            <th>Review Given</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, index) => (
            <tr key={doctor.id}>
              <td>{index + 1}</td>
              <td>{doctor.name}</td>
              <td>{doctor.speciality}</td>
              <td>
                <button
                  onClick={() => handleProvideFeedback(doctor)}
                  disabled={submittedReviews[doctor.id]}
                >
                  {submittedReviews[doctor.id] ? "Feedback Submitted" : "Click Here"}
                </button>
              </td>
              <td>
                {submittedReviews[doctor.id]?.review || "No feedback yet"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Render ReviewForm only when selectedDoctor is not null */}
      {selectedDoctor && (
        <div className="review-form-container">
          <ReviewForm doctor={selectedDoctor} onSubmit={handleReviewSubmit} />
          <button onClick={() => setSelectedDoctor(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Reviews;
