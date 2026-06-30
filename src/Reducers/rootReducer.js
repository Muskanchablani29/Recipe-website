import { combineReducers } from 'redux';
import authReducer from './authReducers';
import reviewReducer from './reviewReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  reviews: reviewReducer,
});

export default rootReducer;
