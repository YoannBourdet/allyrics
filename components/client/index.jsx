import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import { filter, search } from '../../reducers/';
import App from '../common/App';

const preloadedState = window.__INIT__;

const store = createStore(
  combineReducers({ filter, search }),
  preloadedState,
  applyMiddleware(logger),
);

ReactDOM.hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.main'),
);
