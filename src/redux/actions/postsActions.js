import { FETCH_POSTS, NEW_POST, CLEAR_POST } from './types';

export function fetchPosts() {
    return function(dispatch) {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => dispatch({
                type: FETCH_POSTS,
                payload: posts
            }));
    }
}

export function clearPostData() {
    return function(dispatch) {
        dispatch({
            type: CLEAR_POST
        })
    }
}

export const createPost = (postData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: NEW_POST,
            payload: data
        }));
}