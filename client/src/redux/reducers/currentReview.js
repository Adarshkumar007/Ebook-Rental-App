import { CURRENT_REVIEW } from "../actions/types";

const initialState = {
    currentReview:null,
}
const currentReviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_REVIEW:
            console.log("reached review");
            return ({
                ...state,
                currentReview:action.currentReview,
            });
        default:
            return state;
    }
}
export default currentReviewReducer;