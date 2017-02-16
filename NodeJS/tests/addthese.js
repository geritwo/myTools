'use strict'

function addThese(a, b) {
  if (typeof a == "number" && typeof b == "number") {
    return a + b;
  } else {
    throw new TypeError('Input parameters must be numbers.');
  }
};

module.exports = addThese;
