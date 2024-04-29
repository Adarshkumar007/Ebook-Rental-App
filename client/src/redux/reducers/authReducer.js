import { LOGIN_SUCCESS, LOGIN_FAILURE, SIGNUP_SUCCESS, SIGNUP_FAILURE,CLEAR_ERROR, LOGOUT, SET_ACTIVE_MODAL } from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: localStorage.getItem('token')?true:false,
  isLoading: false,
  username:localStorage.getItem('username'),
  imageSrc:localStorage.getItem('imageSrc'),
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log(action.payload.imageSrc);
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('username', action.payload.username);
      localStorage.setItem('imageSrc', action.payload.imageSrc);
      
      return {
        ...state,
        
        isAuthenticated: true,
        isLoading: false,
        error:null,
        activeModal: null,
        username:localStorage.getItem('username'),
        imageSrc:localStorage.getItem('imageSrc'),
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        
        isAuthenticated: false,
        isLoading: false,
        error:null,
        activeModal: 'login',
      };
    case LOGIN_FAILURE:
    case SIGNUP_FAILURE:
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        error:action.payload,

      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null, 
      };
    case LOGOUT:
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('imageSrc');
      return{
        ...state,
        isAuthenticated:false,
        isLoading:false,
        username:localStorage.getItem('username'),
        imageSrc:localStorage.getItem('imageSrc'),
      };
    case SET_ACTIVE_MODAL:
      return {
        ...state,
        activeModal: action.payload
      };
    default:
      return state;
  } 
};

export default authReducer;
