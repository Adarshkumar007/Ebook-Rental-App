import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILURE, SIGNUP_SUCCESS, SIGNUP_FAILURE,CLEAR_ERROR, LOGOUT, SET_ACTIVE_MODAL } from './types';

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
    if (err.response) {
      // Handle response errors
      console.error('Response status:', err.response.status);
      console.error('Response data:', err.response.data);
      dispatch({
        type: LOGIN_FAILURE,
        payload: err.response.data.message,
      });
    } else if (err.request) {
      // Handle network errors
      console.error('No response received:', err.request);
      dispatch({
        type: LOGIN_FAILURE,
        payload: 'Network error: Unable to connect to the server.',
      });
    } else {
      // Handle other errors
      console.error('Error:', err.message);
      dispatch({
        type: LOGIN_FAILURE,
        payload: 'An error occurred.',
      });
    }
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
      payload:err.response.data.message,
    });
  }
};

export const logout=()=>async(dispatch)=>{
  try {
    dispatch({
      type:LOGOUT,
    })
  } catch (error) {
    
  }
}
export const setActiveModal = (modalName) =>async(dispatch)=> {
  try {
    dispatch({
      type: SET_ACTIVE_MODAL,
      payload: modalName,
    })
  } catch (error) {
    dispatch({
      type: SET_ACTIVE_MODAL,
      payload: modalName,
    })
  }
};
export const clearError = () => async(dispatch)=>{
  dispatch({
    type: CLEAR_ERROR,
  })
  
};
