import * as types from '../actions/types';

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_POSTS_REQUEST:
      return { ...state, loading: true };
    case types.GET_ALL_POSTS_SUCCESS:
      return { posts: action.payload, loading: false };
    case types.GET_ALL_POSTS_REQUEST:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
