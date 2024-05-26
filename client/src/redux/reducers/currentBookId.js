import { CURRENT_BOOKID } from "../actions/types";

const initialState = {
  currentBookID:null
};

const bookIDReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_BOOKID:
        return {
            ...state,
            currentBookID:action.currentBookID,
        }
    default:
      return state;
  } 
};

export default bookIDReducer;
