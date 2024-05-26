import { ISSUBSCRIBED } from "../actions/types";

const initialState = {
    isSubscribed:false
};
  
const isNewSubscribed = (state = initialState, action) => {
    switch (action.type) {
      case ISSUBSCRIBED:
          console.log("is",action.isSubscribed);
          return {
              ...state,
              isSubscribed:action.isSubscribed,
          }
      default:
        return state;
    } 
  };
  
  export default isNewSubscribed;