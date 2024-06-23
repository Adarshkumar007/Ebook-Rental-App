import { SELLER_LOGIN_FAILURE, SELLER_LOGIN_SUCCESS, SELLER_LOGOUT, SELLER_SIGNUP_FAILURE, SELLER_SIGNUP_SUCCESS, SET_ACTIVE_MODAL_SELLER } from "../actions/types";

const initialState = {
    token: localStorage.getItem('sellertoken'),
    isAuthenticated: localStorage.getItem('sellertoken')?true:false,
    isLoading: false,
    user: null,
    username:localStorage.getItem('sellername'),
  };

const sellerAuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELLER_LOGIN_SUCCESS:
          console.log(action.payload.token);
          localStorage.setItem('sellertoken', action.payload.token);
          localStorage.setItem('sellername', action.payload.username);
          localStorage.setItem('sellerimageSrc', action.payload.imageSrc);
          
          return {
            ...state,
            ...action.payload,
            isAuthenticated: true,
            isLoading: false,
            error:null,
            activeModal: null,
          };
        case SELLER_SIGNUP_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: false,
        isLoading: false,
        error:null,
        activeModal: 'login',
      };
    case SELLER_LOGIN_FAILURE:
    case SELLER_SIGNUP_FAILURE:
      localStorage.removeItem('sellertoken');
      localStorage.removeItem('sellername');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        error:action.payload,

      };
          case SET_ACTIVE_MODAL_SELLER:
            return {
              ...state,
              activeModal: action.payload,
            };
          case SELLER_LOGOUT:
            localStorage.removeItem('sellertoken');
            localStorage.removeItem('sellername');
            localStorage.removeItem('sellerimageSrc');
            return{
              ...state,
              isAuthenticated:false,
              isLoading:false,
            };
          default:
             return state;
    }
}
export default sellerAuthReducer;