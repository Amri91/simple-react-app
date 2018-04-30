import { combineReducers } from 'redux';
import weatherPerCity from './weatherPerCity';
import citySelected from './citySelected';

const rootReducer = combineReducers({weatherPerCity, citySelected});

export default rootReducer;
