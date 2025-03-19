import React, { useState, useCallback, memo } from "react";
import "./ReviewModal.css";

// ... StarRating component remains the same ...

const ReviewModal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    rating: 0,
    review: "",
    name: "",
    role: "",
  });
  const [hover, setHover] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ... other handlers remain the same ...

  return (
    <div className="review-modal-overlay">
      <div className="review-modal-container">
        <button className="review-close-button" onClick={onClose}>×</button>
        
        <div className="review-modal-header">
          <h2 className="review-modal-title">Share Your Experience</h2>
          <p className="review-modal-subtitle">
            Your feedback helps us improve and inspire others
          </p>
        </div>

        <form onSubmit={handleSubmit} className="review-form">
          {/* ... other form fields remain the same ... */}

          <div className="review-input-group highlighted">
            <label htmlFor="review">Your Review</label>
            <textarea
              id="review"
              value={formData.review}
              onChange={handleInputChange}
              placeholder="Share your experience with us..."
              className="review-textarea highlight-effect"
              rows="4"
            />
          </div>

          <div className="review-modal-actions">
            <button 
              type="button" 
              className="review-cancel-button"
              onClick={onClose}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="review-submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Post Review"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default memo(ReviewModal);
