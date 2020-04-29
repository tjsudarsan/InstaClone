import { createStore, applyMiddleware } from 'redux';

// Middlewares
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

// Combined Reducer
import reducers from './reducers';

const middlewares = applyMiddleware(thunkMiddleware, logger);

const configureStore = () => createStore(reducers, middlewares);

export default configureStore;
