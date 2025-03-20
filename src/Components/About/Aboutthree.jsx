import { useState, useCallback, memo } from "react";
import { Star } from "lucide-react";
import "./Aboutthree.css";

const ReviewForm = memo(() => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleRatingClick = useCallback((star) => {
    if (!submitted) {
      setRating(star);
    }
  }, [submitted]);

  const handleReviewChange = useCallback((e) => {
    if (!submitted) {
      setReview(e.target.value);
    }
  }, [submitted]);

  const handleSubmit = useCallback(() => {
    if (!rating || !review.trim()) {
      alert("Please provide both a rating and a review");
      return;
    }

    // Add your submit logic here
    console.log({ rating, review });
    setSubmitted(true);
    setShowSuccess(true);

    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  }, [rating, review]);

  const handleNewReview = useCallback(() => {
    setRating(0);
    setReview("");
    setSubmitted(false);
  }, []);

  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="review-container">
      {showSuccess && (
        <div className="success-message">
          <div className="success-content">
            <svg className="check-icon" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            Review submitted successfully!
          </div>
        </div>
      )}
      
      <div className="review-content">
        <div className="review-header">
          <h2 className="review-title">Write a Review</h2>
        </div>
        <p className="description">
          Share your thoughts about this recipe with other food lovers.
        </p>
        <div className="star-container">
          {stars.map((star) => (
            <Star
              key={star}
              size={24}
              className={`star ${rating >= star ? "star-active" : "star-inactive"} ${
                submitted ? "submitted" : ""
              }`}
              onClick={() => handleRatingClick(star)}
            />
          ))}
        </div>
        <textarea
          placeholder="Write your review"
          value={review}
          onChange={handleReviewChange}
          className={`textarea ${submitted ? "submitted" : ""}`}
          disabled={submitted}
        />
        <div className="button-container">
          {!submitted ? (
            <button 
              onClick={handleSubmit} 
              className="button button-submit"
            >
              Post review
            </button>
          ) : (
            <button 
              onClick={handleNewReview} 
              className="button button-new-review"
            >
              Write another review
            </button>
          )}
        </div>
      </div>
    </div>
  );
});

ReviewForm.displayName = 'ReviewForm';

export default ReviewForm;