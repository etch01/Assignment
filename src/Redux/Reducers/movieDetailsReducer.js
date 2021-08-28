import { GET_DETAILS_REQUEST, GET_DETAILS_REQUEST_SUCCESS, GET_DETAILS_REQUEST_FAILED } from "../Types";


const initialState = {


    details: [],
    isLoading: false,

};
const moviesDetailsReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_DETAILS_REQUEST:

            return {
                ...state,
                isLoading: true
            };

        case GET_DETAILS_REQUEST_SUCCESS:
            return {
                ...state,
                details: action.details,
                isLoading: false
            };

        case GET_DETAILS_REQUEST_FAILED:
            return {
                ...state,
                isLoading: false
            };


        default:
            return state;
    }
};



export {moviesDetailsReducer};