import { FETCH_POSTS, FETCH_POST } from '../actions/Index.js';

const INITIAL_STATE = {
    all: [],
    post: null
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_POST:
            return { all: [], post: action.payload };
        case FETCH_POSTS:
            return { all: action.payload, post: null };
        default:
            return state;
    }
    return state;
}