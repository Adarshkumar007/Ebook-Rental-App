import { combineReducers } from 'redux';
import authReducer from './authReducer';
import sendOTPReducer from './sendOTPReducer';
import accountReducer from './accoutReducer';
import sellerAuthReducer from './sellerAuthReducer';
import ratingReducer from './ratingReducer';
import bookIDReducer from './currentBookId';

const rootReducer = combineReducers({
  auth: authReducer,
  sendOTP:sendOTPReducer,
  setUserType:accountReducer,
  sellerauth:sellerAuthReducer,
  currentratingvalue:ratingReducer,
  currentBookID:bookIDReducer
});

export default rootReducer;
