const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const without = require('./without');
const takeUntil = require('./takeUntil');
const reverseString = require('./reverseString');
const reverse = require('./reverse');
const pigString = require('./pigString');
const pigLatin = require('./pigLatin');
const letterPosition = require('./letterPosition');
const flatten = require('./flatten');
const findKeyByValue = require('./findKeyByValue');
const findKey = require('./findKey');
const eqObjects = require('./eqObjects');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual= require('./assertObjectsEqual');

const lotide = {
  head,
  tail,
  middle,
  without,
  takeUntil,
  reverseString,
  reverse,
  pigString,
  pigLatin,
  letterPosition,
  flatten,
  findKey,
  findKeyByValue,
  eqObjects,
  eqArrays,
  assertEqual,
  assertArraysEqual,
  countOnly,
  countLetters,
  assertObjectsEqual
};

console.log(lotide)

module.exports = lotide