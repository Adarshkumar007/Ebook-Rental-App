import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILURE, SIGNUP_SUCCESS, SIGNUP_FAILURE,CLEAR_ERROR } from './types';

// Login Action
export const login = (email, password) => async (dispatch) => {
  try {
    
    const res = await axios.post('http://localhost:5000/api/login', { email, password });
    console.log(res.data);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: LOGIN_FAILURE,
      payload:err.response.data.message,
    });
  }
};

// Sign Up Action
export const signup = (username, email, password) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:5000/api/signup', { username, email, password });
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SIGNUP_FAILURE,
    });
  }
};
export const clearError = () => ({
  type: CLEAR_ERROR,
});