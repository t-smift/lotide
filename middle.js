
var eqArrays = function(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false
  }
  for (x = 0; x < arr1.length; x++) {
    if (arr1[x] !== arr2[x]) {
      return false
    }
  }
  return true
} 

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`👏👏👏 Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`);
}

const middle = function(array) {
  let midEle = [];
  if (array.length <= 2) {
    midEle = [];
  }
  if (array.length > 2 && array.length % 2 !== 0) {
    midEle = array[Math.floor(array.length / 2)];
  }
  if (array.length > 2 && array.length % 2 === 0) {
    midEle = array.slice((array.length / 2 - 1),(array.length / 2 + 1));
  }
  return midEle;
};
console.log(middle([1, 2, 3, 4, 5]));