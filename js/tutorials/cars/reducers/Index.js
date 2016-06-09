import { combineReducers } from 'redux';
import ReducerCars from './ReducerCars.js';
import ReducerActiveCar from './ReducerActiveCar.js';

const rootReducer = combineReducers({
    activeCar: ReducerActiveCar,
    cars: ReducerCars
});

export default rootReducer;