import { combineReducers } from 'redux';

// reducers
import auth from './reducer-auth';
import search from './reducer-search';
import profile from './reducer-profile';

const reducers = combineReducers({
  auth,
  search,
  profile,
});

export default reducers;
