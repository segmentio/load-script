'use strict';

var assert = require('assert');
var load = require('../');
var type = require('component-type');

var isIE8OrOlder = Boolean(document.all && !document.addEventListener);
// Disables tests on legacy (<= IE8 browsers)
var modernIt = isIE8OrOlder ? xit : it;

describe('load-script', function() {
  it('should load src string with callback', function(done) {
    load('//cdnjs.cloudflare.com/ajax/libs/angular.js/1.1.1/angular.min.js', function(error) {
      assert(!error);
      done();
    });
  });

  it('should return the script element', function() {
    var script = load('//cdnjs.cloudflare.com/ajax/libs/dropbox.js/0.9.0/dropbox.min.js');
    assert(type(script) === 'element');
  });

  it('should load protocol-specific src', function(done) {
    var http = 'http://cdnjs.cloudflare.com/ajax/libs/datejs/1.0/date.min.js';
    var https = 'https://cdnjs.cloudflare.com/ajax/libs/datejs/1.0/date.min.js';
    var script = load({ http: http, https: https }, function(error) {
      assert(!error);
      done();
    });
    assert(script.src === http);
  });

  modernIt('should pass an error to callback when the script fails to load', function(done) {
    load('//cdnjs.cloudflare.com/ajax/libs/angular.js/1.1.1/nonexistent.min.js', function(error) {
      assert(error);
      done();
    });
  });
});
