
import { GET_CREDITS_REQUEST, GET_CREDITS_REQUEST_SUCCESS, GET_CREDITS_REQUEST_FAILED } from "../Types";


const initialState = {
    credits:[],

};
const creditsRequestReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_CREDITS_REQUEST:
            return {
                ...state,
            };

        case GET_CREDITS_REQUEST_SUCCESS:
            return {
                ...state,
                credits: action.credits,
            };

        case GET_CREDITS_REQUEST_FAILED:
            return {
                ...state,
            };

        default:
            return state;
    }
};



export {creditsRequestReducer};