import {combineReducers} from 'redux';
import {connectionReducer} from './connectionReducer';
import {moviesRequestReducer} from './MoviesReducer';
import { genreRequestReducer } from "./genreReducer";
import { moviesDetailsReducer } from "./movieDetailsReducer";

const reducer = combineReducers({connectionReducer,moviesRequestReducer,genreRequestReducer,moviesDetailsReducer});

export {reducer};