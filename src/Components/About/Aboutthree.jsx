import { useState, useCallback, memo } from "react";
import { Star } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { addReview } from "../../Reducers/reviewReducer";
import "./Aboutthree.css";

const ReviewForm = memo(() => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);

  const handleRatingClick = useCallback(
    (star) => {
      if (!submitted) setRating(star);
    },
    [submitted]
  );

  const handleReviewChange = useCallback(
    (e) => {
      if (!submitted) setReview(e.target.value);
    },
    [submitted]
  );

  const handleSubmit = useCallback(() => {
    if (!isLoggedIn) {
      alert("Please log in to post a review.");
      return;
    }
    if (!rating || !review.trim()) {
      alert("Please provide both a rating and a review.");
      return;
    }

    const newReview = {
      id: Date.now(),
      name: user?.username || user?.name || "Anonymous",
      role: "Verified User",
      text: review.trim(),
      rating,
      image: null,
    };

    dispatch(addReview(newReview));
    setSubmitted(true);
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  }, [isLoggedIn, rating, review, user, dispatch]);

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

        {!isLoggedIn ? (
          <div className="review-login-notice">
            <span>🔒</span>
            <p>You must be <strong>logged in</strong> to post a review.</p>
          </div>
        ) : (
          <>
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
                <button onClick={handleSubmit} className="button button-submit">
                  Post review
                </button>
              ) : (
                <button onClick={handleNewReview} className="button button-new-review">
                  Write another review
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
});

ReviewForm.displayName = "ReviewForm";

export default ReviewForm;
