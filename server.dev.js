const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const Loadable = require('react-loadable');

const api = require('./routes/api');
const config = require('./config');
const webpackConfig = require('./webpack.dev.config.js');

const compiler = webpack(webpackConfig);
const app = express();

app.use('/api', api);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: '/static/',
  }),
);

app.use(webpackHotMiddleware(compiler.compilers.find(c => c.name === 'client')));

app.get('/', webpackHotServerMiddleware(compiler));

/* eslint no-console: 0 */
(async () => {
  await Loadable.preloadAll();
  app.listen(config.port, () => console.log(`App listening on port ${config.port}!`));
})();
