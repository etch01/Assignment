

import { GET_GENRE_REQUEST, GET_GENRE_REQUEST_SUCCESS, GET_GENRE_REQUEST_FAILED } from "../Types";


const initialState = {
    genres:[],

};
const genreRequestReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_GENRE_REQUEST:
            return {
                ...state,
            };

        case GET_GENRE_REQUEST_SUCCESS:
            return {
                ...state,
                genres: action.genreList,
            };

        case GET_GENRE_REQUEST_FAILED:
            return {
                ...state,
            };

        default:
            return state;
    }
};



export {genreRequestReducer};