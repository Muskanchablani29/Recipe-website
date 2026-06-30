export const REVIEW_ACTIONS = {
  ADD_REVIEW: 'ADD_REVIEW',
};

const loadReviewsFromStorage = () => {
  try {
    const data = localStorage.getItem('userReviews');
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveReviewsToStorage = (reviews) => {
  try {
    localStorage.setItem('userReviews', JSON.stringify(reviews));
  } catch {
    // ignore
  }
};

const initialState = {
  reviews: loadReviewsFromStorage(),
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case REVIEW_ACTIONS.ADD_REVIEW: {
      const updatedReviews = [...state.reviews, action.payload];
      saveReviewsToStorage(updatedReviews);
      return { ...state, reviews: updatedReviews };
    }
    default:
      return state;
  }
};

export const addReview = (review) => ({
  type: REVIEW_ACTIONS.ADD_REVIEW,
  payload: review,
});

export default reviewReducer;
