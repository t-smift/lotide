// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`👏👏👏 Assertion Passed: ${actual} === ${expected}`);
//   } else console.log(`❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`);
// };
const assertEqual = require('./assertEqual');

const head = function(array) {
  let first = array[0];
  return first;
};

module.exports = head