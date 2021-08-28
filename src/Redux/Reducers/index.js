import {combineReducers} from 'redux';
import {connectionReducer} from './connectionReducer';
import {moviesRequestReducer} from './MoviesReducer';
import { genreRequestReducer } from "./genreReducer";
import { moviesDetailsReducer } from "./movieDetailsReducer";
import { creditsRequestReducer } from './creditsReducer';

const reducer = combineReducers({connectionReducer,moviesRequestReducer,genreRequestReducer,moviesDetailsReducer,creditsRequestReducer});

export {reducer};