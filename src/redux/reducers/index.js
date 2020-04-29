import { combineReducers } from 'redux';

// reducers
import auth from './reducer-auth';

const reducers = combineReducers({
  auth,
});

export default reducers;
