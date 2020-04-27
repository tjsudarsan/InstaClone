import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

// Only for Development
import reduxLogger from 'redux-logger';

// Reducer
import reducers from './reducers';

const middlewares = applyMiddleware(reduxThunk, reduxLogger);

const constructStore = () => createStore(reducers, middlewares);

export default constructStore;
