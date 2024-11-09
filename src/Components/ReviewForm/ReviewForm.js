import React, { useState } from 'react';
import './ReviewForm.css';

const ReviewForm = ({ doctor }) => {
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here
  };

  return (
      <div style={{ paddingTop: '50px' }}> {/* This wrapper will add space */}
        <div className="review-form-container" style={{ marginTop: '50px' }}>
        <h2 className="review-form-title">Give Your Review</h2>
        <form className="review-form" onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
            />
            </div>
            <div>
            <label htmlFor="review">Review:</label>
            <textarea
                id="review"
                name="review"
                value={formData.review}
                onChange={handleInputChange}
            />
            </div>
            <div>
            <label htmlFor="rating">Rating:</label>
            <select
                id="rating"
                name="rating"
                value={formData.rating}
                onChange={handleInputChange}
            >
                <option value="0">Select Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            </div>
            <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
