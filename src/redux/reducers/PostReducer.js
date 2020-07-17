import { FETCH_POSTS, NEW_POST, CLEAR_POST } from '../actions/types';

const initialState = {
    posts: [],
    post: {
        title: '',
        body: ''
    },
    initialFetchIsDone: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case CLEAR_POST:
            return {
                ...state,
                post: {
                    title: '',
                    body: ''
                }
            }
        case NEW_POST:
            return {
                ...state,
                post: action.payload
            }
        case FETCH_POSTS:
            return {
                ...state,
                posts: action.payload,
                initialFetchIsDone: true
            }
        default:
            return state;
    }
}