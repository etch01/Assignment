import { GET_MOVIES_REQUEST, GET_MOVIES_REQUEST_SUCCESS, GET_MOVIES_REQUEST_FAILED,PAGING_MOVIES_REQUEST } from "../Types";


const initialState = {


    MoviesList: [],
    genre:[],
    isLoading: false,

};
const moviesRequestReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_MOVIES_REQUEST:

            return {
                ...state,
                isLoading: true
            };

        case GET_MOVIES_REQUEST_SUCCESS:
            return {
                ...state,
                MoviesList: action.moviesList,
                isLoading: false
            };

        case GET_MOVIES_REQUEST_FAILED:
            return {
                ...state,
                isLoading: false
            };

            case PAGING_MOVIES_REQUEST:
                return {
                    ...state,
                    MoviesList:  state.MoviesList.concat(action.moviesList),
                    isLoading: false
                };


        default:
            return state;
    }
};



export {moviesRequestReducer};