import { combineReducers } from 'redux';
import ReducerPosts from './ReducerPosts.js';

const rootReducer = combineReducers({
    posts: ReducerPosts
});

export default rootReducer;