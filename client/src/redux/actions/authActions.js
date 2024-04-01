import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILURE, SIGNUP_SUCCESS, SIGNUP_FAILURE,CLEAR_ERROR, LOGOUT, SET_ACTIVE_MODAL, SET_USER_TYPE, SELLER_LOGIN_SUCCESS, SET_ACTIVE_MODAL_SELLER, SELLER_LOGOUT, SELLER_SIGNUP_SUCCESS, SELLER_SIGNUP_FAILURE } from './types';

import {url} from '../../url'; 
// Login Action
export const login = (email, password,userType) => async (dispatch) => {
  
  console.log("user type:",userType);
  if(userType==="seller"){
     let route=url+"/api/sellerlogin";
     try {
      console.log(url);
      console.log(email,password);
      const res = await axios.post(route, { email, password });
      console.log(res.data);
      dispatch({
        type: SELLER_LOGIN_SUCCESS,
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
  }
  else{
    let route=url+"/api/login";
     try {
      console.log(url);
      console.log(email,password);
      const res = await axios.post(route, { email, password });
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
  }
  
};

// Sign Up Action
export const signup = (username, email, password, address, pin, phone, profile_image, userType) => async (dispatch) => {
  
  const formData = new FormData();
formData.append('username', username);
formData.append('email', email);
formData.append('password', password);
formData.append('address', address);
formData.append('pin', pin);
formData.append('phone', phone);
formData.append('profile_image', profile_image); // Assuming profileImageFile is a File object containing the selected file

  if(userType==="seller"){
    let route=url+"/api/sellersignup";
    try {
      const res = await axios.post(route, formData);
      dispatch({
        type: SELLER_SIGNUP_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: SELLER_SIGNUP_FAILURE,
        payload:err.response.data.message,
      });
    }
 }
 else{
  let route=url+"/api/signup";
    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('address', address);
    formData.append('pin', pin);
    formData.append('phone', phone);
    formData.append('profile_image', profile_image);
    try {
      const res = await axios.post(route, formData);
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
 }
  
};

export const logout=(userType)=>async(dispatch)=>{
  console.log("user..",userType);
  if(userType==="user"){
    try {
      dispatch({
        type:LOGOUT,
      })
    } catch (error) {
      
    }
  }
  else{
    try {
      dispatch({
        type:SELLER_LOGOUT,
      })
    } catch (error) {
      
    }
  }
}
export const setActiveModal = (modalName,userType) =>async(dispatch)=> {
  console.log("MODAL",modalName,userType);
  if(userType==="user"){
    dispatch({
      type: SET_ACTIVE_MODAL,
      payload: modalName,
    })
  }
  else{
    dispatch({
      type: SET_ACTIVE_MODAL_SELLER,
      payload: modalName,
    })
  }
};
export const clearError = () => async(dispatch)=>{
  dispatch({
    type: CLEAR_ERROR,
  })
  
};
export const setUserTypeAction=(usertype)=>(dispatch)=>{
  dispatch({
    type:SET_USER_TYPE,
    usertype:usertype,
  })
}