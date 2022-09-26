const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');
const middle = require('../middle');

assertEqual(assertArraysEqual(middle([1]),[]), true);
assertEqual(assertArraysEqual(middle([]),[]), true);
assertEqual(assertArraysEqual(middle([1, 2, 3]), 2), true);
assertEqual(assertArraysEqual(middle([1, 2, 3, 4, 5]), 3), true);
assertEqual(assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]), true);