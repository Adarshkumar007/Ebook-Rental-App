import { SELLER_LOGIN_SUCCESS, SELLER_LOGOUT, SET_ACTIVE_MODAL_SELLER } from "../actions/types";

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
          
          return {
            ...state,
            ...action.payload,
            isAuthenticated: true,
            isLoading: false,
            error:null,
            activeModal: null,
          };
          case SET_ACTIVE_MODAL_SELLER:
            return {
              ...state,
              activeModal: action.payload,
            };
          case SELLER_LOGOUT:
            localStorage.removeItem('sellertoken');
            localStorage.removeItem('sellername');
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