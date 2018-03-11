import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { search, hits } from '../../reducers/';
import App from '../common/App';

const reducers = combineReducers({ search, hits });
const store = createStore(reducers, applyMiddleware(logger, createSagaMiddleware()));
const preloadedState = JSON.stringify(store.getState()).replace(/</g, '\\u003c');
const preloadedStateString = `window.__INIT__=${preloadedState}`;

const DefaultLayout = () => (
  <html lang="fr">
    <head>
      <title>test</title>
    </head>
    <body>
      <div className="main">
        <Provider store={store}>
          <App />
        </Provider>
      </div>
      <script dangerouslySetInnerHTML={{ __html: preloadedStateString }} />
      <script src="/static/client.js" />
    </body>
  </html>
);

export default DefaultLayout;
