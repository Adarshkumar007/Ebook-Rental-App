import { combineReducers } from 'redux';
import authReducer from './authReducer';
import sendOTPReducer from './sendOTPReducer';
import accountReducer from './accoutReducer';
import sellerAuthReducer from './sellerAuthReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  sendOTP:sendOTPReducer,
  setUserType:accountReducer,
  sellerauth:sellerAuthReducer,
});

export default rootReducer;
