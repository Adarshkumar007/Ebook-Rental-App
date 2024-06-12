import { combineReducers } from 'redux';
import authReducer from './authReducer';
import sendOTPReducer from './sendOTPReducer';
import accountReducer from './accoutReducer';
import sellerAuthReducer from './sellerAuthReducer';
import ratingReducer from './ratingReducer';
import bookIDReducer from './currentBookId';
import isNewSubscribed from './isSubscribed';
import currentReviewReducer from './currentReview';
import bookInfoReducer from './currentBookInfo';

const rootReducer = combineReducers({
  auth: authReducer,
  sendOTP:sendOTPReducer,
  setUserType:accountReducer,
  sellerauth:sellerAuthReducer,
  currentratingvalue:ratingReducer,
  currentBookID:bookIDReducer,
  isNewSubscribed:isNewSubscribed,
  currentReviewReducer:currentReviewReducer,
  bookInfoReducer:bookInfoReducer
});

export default rootReducer;
