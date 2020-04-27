import { combineReducers } from 'redux';

import auth from './reducer-auth';
import feeds from './reducer-feeds';

const reducers = combineReducers({
  auth,
  feeds,
});

export default reducers;
