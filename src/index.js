import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// React App
import App from './App';

// Store Creator
import configureStore from './redux/store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
