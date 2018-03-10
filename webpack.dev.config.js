const webpack = require('webpack');
const path = require('path');
const { ReactLoadablePlugin } = require('react-loadable/webpack');

module.exports = [
  {
    name: 'client',
    target: 'web',
    entry: {
      client: './components/client',
    },
    output: {
      path: path.resolve(__dirname, 'static'),
      filename: '[name].js',
      chunkFilename: '[name].js',
      publicPath: '/static/',
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
    plugins: [
      new ReactLoadablePlugin({
        filename: './react-loadable.json',
      }),
    ],
  },
  {
    name: 'server',
    target: 'node',
    entry: './components/server',
    output: {
      filename: 'server.js',
      libraryTarget: 'commonjs2',
      publicPath: '/static/',
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
    ],
  },
];
