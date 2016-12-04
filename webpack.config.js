const webpack = require('webpack');

module.exports = {
  output: {
    filename: 'bundle.js'
  },

  devtool: 'sourcemap',

  module: {
    loaders: [
      {test: /\.html$/, loader: 'raw'},
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: [/web\/node_modules/, /server/]
      },
    ]
  }
};
