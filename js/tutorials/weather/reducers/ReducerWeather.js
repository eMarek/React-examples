import { FETCH_WEATHER } from '../actions/Index.js';

export default function(state = [], action) {
    // never manipulate existing array!

    switch (action.type) {
        case FETCH_WEATHER:
            // return state.concat([action.payload]);
            return [ action.payload, ...state ]; // [ city, city, city ]
    }
    return state;
}