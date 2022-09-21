const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👏👏👏 Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`);
};

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);