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

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  without: without,
  takeUntil: takeUntil,
  reverseString: reverseString,
  reverse: reverse,
  pigString: pigString,
  pigLatin: pigLatin,
  letterPosition: letterPosition,
  flatten: flatten,
  findKeyByValue: findKeyByValue,
  findKey: findKey,
  eqObjects: eqObjects,
  countOnly: countOnly,
  countLetters: countLetters
};