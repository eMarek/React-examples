import $ from 'jquery';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=ram****apam';

// action type
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

export function fetchPosts() {
    const request = $.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(props) {
    const request = $.post(`${ROOT_URL}/posts${API_KEY}`, props);

    return {
        type: CREATE_POST,
        payload: request
    };
}

export function fetchPost(id) {
    const request = $.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    };
}

export function deletePost(id) {
    const request = $.ajax({ url: `${ROOT_URL}/posts/${id}${API_KEY}`, type: 'DELETE' });

    return {
        type: DELETE_POST,
        payload: request
    };
}