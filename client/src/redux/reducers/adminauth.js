import { LOGIN_SUCCESS, LOGIN_FAILURE, SIGNUP_SUCCESS, SIGNUP_FAILURE,CLEAR_ERROR, LOGOUT, SET_ACTIVE_MODAL, ADMIN_LOGIN_SUCCESS, ADMIN_SIGNUP_SUCCESS, ADMIN_LOGIN_FAILURE, ADMIN_SIGNUP_FAILURE, ADMIN_CLEAR_ERROR, ADMIN_LOGOUT, ADMIN_SET_ACTIVE_MODAL } from '../actions/types';

const initialState = {
  admintoken: localStorage.getItem('admintoken'),
  isAuthenticated: localStorage.getItem('admintoken')?true:false,
  adminusername:localStorage.getItem('adminusername'),
};

const adminauthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_LOGIN_SUCCESS:
      console.log(action.payload.imageSrc);
      localStorage.setItem('admintoken', action.payload.token);
      localStorage.setItem('adminusername', action.payload.username);
      localStorage.setItem('imageSrc', action.payload.imageSrc);
      localStorage.setItem('id',action.payload.id);
      return {
        ...state,
        
        isAuthenticated: true,
        isLoading: false,
        error:null,
        activeModal: null,
        adminusername:localStorage.getItem('username'),
        imageSrc:localStorage.getItem('imageSrc'),
        id:localStorage.getItem('id'),
      };
    case ADMIN_SIGNUP_SUCCESS:
      return {
        ...state,
        
        isAuthenticated: false,
        isLoading: false,
        error:null,
        activeModal: 'login',
      };
    case ADMIN_LOGIN_FAILURE:
    case ADMIN_SIGNUP_FAILURE:
      localStorage.removeItem('admintoken');
      localStorage.removeItem('adminusername');
      return {
        ...state,
        admintoken: null,
        isAuthenticated: false,
        isLoading: false,
        error:action.payload,

      };
    case ADMIN_CLEAR_ERROR:
      return {
        ...state,
        error: null, 
      };
    case ADMIN_LOGOUT:
      localStorage.removeItem('admintoken');
      localStorage.removeItem('adminusername');
      localStorage.removeItem('imageSrc');
      localStorage.removeItem('id');

      return{
        ...state,
        isAuthenticated:false,
        isLoading:false,
        adminusername:localStorage.getItem('adminusername'),
        imageSrc:localStorage.getItem('imageSrc'),
        id:localStorage.getItem('id'),
      };
    case ADMIN_SET_ACTIVE_MODAL:
      return {
        ...state,
        activeModal: action.payload
      };
    default:
      return state;
  } 
};

export default adminauthReducer;
