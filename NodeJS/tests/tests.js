'use strict';

var test = require('tape');
var unit = require('./addthese.js');

// Test

test('2 + 2 = 4?', function(t) {
  var actual = unit(2, 2);
  var expected = 4;

  t.equal(actual, expected);
  t.end();
});

test('Throw TypeError if input is wrong.', function(t) {
  t.throws(function () {
    unit('alma', 2);
  }, TypeError);
  t.end();
});
