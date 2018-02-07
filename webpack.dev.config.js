const path = require('path');

module.exports = [
  {
    name: 'client',
    target: 'web',
    entry: './components/client',
    output: {
      path: path.resolve(__dirname, 'static'),
      filename: 'client.js',
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
  },
];
