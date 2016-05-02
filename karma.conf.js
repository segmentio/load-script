'use strict';

module.exports = function(config) {
  var baseConfig = {
    files: [
      'test/index.js'
    ],

    browsers: ['PhantomJS'],

    frameworks: ['browserify', 'mocha'],

    reporters: ['spec'],

    preprocessors: {
      'test/**/*.js': 'browserify'
    },

    browserify: {
      debug: true
    }
  };

  if (process.env.CI) {
    Object.assign(baseConfig, require('./karma.conf.ci'));
  }

  config.set(baseConfig);
};
