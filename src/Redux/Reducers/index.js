import {combineReducers} from 'redux';
import {connectionReducer} from './connectionReducer';
import {moviesRequestReducer} from './MoviesReducer';
import { genreRequestReducer } from "./genreReducer";

const reducer = combineReducers({connectionReducer,moviesRequestReducer,genreRequestReducer});

export {reducer};