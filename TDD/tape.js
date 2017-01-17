// Tape test examples

'use strict';
var test = require('tape');
var decrypt = require('./decrypt.js'); // Test this

test('true', function (t) {
  t.equal(1, 1);
  t.end();
});

test('decrypt alma with 0', function (t) {
  t.equal(decrypt(0, 'alma'), 'alma');
  t.end();
})

test('decrypt alma with 1', function (t) {
  t.equal(decrypt(1, 'zold'), 'ynkc');
  t.end();
})