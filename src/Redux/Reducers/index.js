import {combineReducers} from 'redux';
import {connectionReducer} from './connectionReducer';

const reducer = combineReducers({connectionReducer});

export {reducer};