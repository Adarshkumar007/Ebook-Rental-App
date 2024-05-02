import { combineReducers } from 'redux';
import authReducer from './authReducer';
import sendOTPReducer from './sendOTPReducer';
import accountReducer from './accoutReducer';
import sellerAuthReducer from './sellerAuthReducer';
import ratingReducer from './ratingReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  sendOTP:sendOTPReducer,
  setUserType:accountReducer,
  sellerauth:sellerAuthReducer,
  currentratingvalue:ratingReducer
});

export default rootReducer;
