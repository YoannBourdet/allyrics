import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { search, hits } from '../../reducers/';
import AppSaga from '../../sagas/';
import App from '../common/App';

const sagaMiddleware = createSagaMiddleware();

const preloadedState = window.__INIT__;

const store = createStore(
  combineReducers({ search, hits }),
  preloadedState,
  applyMiddleware(thunk, logger, sagaMiddleware),
);

// then run the saga
sagaMiddleware.run(AppSaga);

ReactDOM.hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.main'),
);
