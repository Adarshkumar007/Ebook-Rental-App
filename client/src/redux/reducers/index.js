import { combineReducers } from 'redux';
import authReducer from './authReducer';
import sendOTPReducer from './sendOTPReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  sendOTP:sendOTPReducer,
});

export default rootReducer;
