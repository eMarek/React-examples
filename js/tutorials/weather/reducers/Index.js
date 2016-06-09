import { combineReducers } from 'redux';
import ReducerWeather from './ReducerWeather.js';

const rootReducer = combineReducers({
    weather: ReducerWeather
});

export default rootReducer;