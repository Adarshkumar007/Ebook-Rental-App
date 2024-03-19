import { LOGIN_SUCCESS, LOGIN_FAILURE, SIGNUP_SUCCESS, SIGNUP_FAILURE,CLEAR_ERROR, LOGOUT } from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: localStorage.getItem('token')?true:false,
  isLoading: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
        error:null,
      };
    case LOGIN_FAILURE:
    case SIGNUP_FAILURE:
      localStorage.removeItem('token');
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
      return{
        ...state,
        isAuthenticated:false,
        isLoading:false,
        token:null,
      };
    default:
      return state;
  } 
};

export default authReducer;
