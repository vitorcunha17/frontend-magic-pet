import { combineReducers } from 'redux';

// Import reducers in line down
import posts from './posts';

const rootReducers = combineReducers({
  posts,
});

export default rootReducers;
