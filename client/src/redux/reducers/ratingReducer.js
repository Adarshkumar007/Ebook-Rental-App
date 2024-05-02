import { CURRENT_RATING } from "../actions/types";

const initialState = {
  currentRating:5
};

const ratingReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_RATING:
        return {
            ...state,
            currentRating:action.count,
        }
    default:
      return state;
  } 
};

export default ratingReducer;
