import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILURE, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './types';

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
    dispatch({
      type: LOGIN_FAILURE,
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
