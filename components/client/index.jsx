import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import Loadable from 'react-loadable';

import { search, hits } from '../../reducers/';
import AppSaga from '../../sagas/';
import App from '../common/App';

const sagaMiddleware = createSagaMiddleware();

const preloadedState = window.__INIT__;

const store = createStore(
  combineReducers({ search, hits }),
  preloadedState,
  applyMiddleware(logger, sagaMiddleware),
);

// then run the saga
sagaMiddleware.run(AppSaga);

window.main = async () => {
  await Loadable.preloadReady();
  ReactDOM.hydrate(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('.main'),
  );
};
