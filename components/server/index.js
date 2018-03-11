import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import ReactDOMServer from 'react-dom/server';

import stats from '../../react-loadable.json';
import { search, hits } from '../../reducers/';
import App from '../common/App';

/* eslint no-unused-vars: 0 */
export default function serverRenderer({ clientStats, serverStats }) {
  return (req, res) => {
    const reducers = combineReducers({ search, hits });
    const store = createStore(reducers, applyMiddleware(logger, createSagaMiddleware()));
    const preloadedState = JSON.stringify(store.getState()).replace(/</g, '\\u003c');

    const modules = [];
    const html = ReactDOMServer.renderToString(
      <Provider store={store}>
        <Loadable.Capture report={moduleName => modules.push(moduleName)}>
          <App />
        </Loadable.Capture>
      </Provider>,
    );

    const bundles = getBundles(stats, modules);
    const styles = bundles.filter(bundle => bundle.file.endsWith('.css'));
    const scripts = bundles.filter(bundle => bundle.file.endsWith('.js'));

    res.status(200).send(`
      <!doctype html>
      <html lang="fr">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>My App</title>
          ${styles.map(style => `<link href="/static/${style.file}" rel="stylesheet"/>`).join('\n')}
        </head>
        <body>
          <div class="main">${html}</div>
          ${scripts.map(script => `<script src="/static/${script.file}"></script>`).join('\n')}
          <script src="/static/client.js"></script>
          <script>
            window.__INIT__=${preloadedState};
            window.main();
          </script>
        </body>
      </html>
    `);
  };
}
