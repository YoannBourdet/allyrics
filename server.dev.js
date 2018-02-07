const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');

const config = require('./webpack.dev.config.js');

const compiler = webpack(config);
const app = express();

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/static/',
}));

app.use(webpackHotMiddleware(compiler.compilers.find(c => c.name === 'client')));
app.use(webpackHotServerMiddleware(compiler));

app.listen(3000, () => console.log(`App listening on port ${3000}!`));
