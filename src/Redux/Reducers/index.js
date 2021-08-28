import {combineReducers} from 'redux';
import {connectionReducer} from './connectionReducer';
import {moviesRequestReducer} from './MoviesReducer';

const reducer = combineReducers({connectionReducer,moviesRequestReducer});

export {reducer};