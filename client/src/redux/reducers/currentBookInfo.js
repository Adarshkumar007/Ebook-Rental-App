import { CURRENT_BOOKINFO } from "../actions/types";

const initialState = {
  bookinfo:null
};

const bookInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_BOOKINFO:
        console.log('bookinfo',action.bookinfo);
        return {
            ...state,
            bookinfo:action.bookinfo,
        }
    default:
      return state;
  } 
};

export default bookInfoReducer;
