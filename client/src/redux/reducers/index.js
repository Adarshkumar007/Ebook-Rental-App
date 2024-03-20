import { combineReducers } from 'redux';
import authReducer from './authReducer';
import sendOTPReducer from './sendOTPReducer';
import accountReducer from './accoutReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  sendOTP:sendOTPReducer,
  setUserType:accountReducer,
});

export default rootReducer;
