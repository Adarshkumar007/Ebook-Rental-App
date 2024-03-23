import { SET_USER_TYPE } from "../actions/types"

const initialState = {
    USER_TYPE:"user",
}
const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_TYPE:
            console.log("reached");
            return ({
                ...state,
                USER_TYPE:action.usertype,
            });
        default:
            return state;
    }
}
export default accountReducer;