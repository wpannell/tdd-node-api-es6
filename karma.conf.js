var webpack = require('webpack');

module.exports = function(config) {
  config.set({
    webpack: {
      coverageReporter: {
        type: 'text'
      },

      module: {
        loaders: [
          {test: /\.html$/, loader: 'raw'},
          {
            test: /\.js$/,
            loader: 'babel',
            exclude: [/web\/node_modules/, /server/]
          },
        ]
      },
    },

    files: [
      {pattern: 'spec.bundle.js', watched: false}
    ],

    preprocessors: {
      './spec.bundle.js': ['webpack']
    },

    webpackServer: {
      noInfo: true
    },

    autoWatch: true,
    autoWatchBatchDelay: 100,
    basePath: '',
    browsers: ['Chrome'],
    colors: true,
    exclude: [],
    frameworks: ['mocha', 'should'],
    logLevel: config.LOG_INFO,
    port: 9876,
    reporters: ['mocha', 'growl'],
    singleRun: false
  });
};
