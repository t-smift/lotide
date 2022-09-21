const eqArrays = function(arr1, arr2) {
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

const assertArraysEqual = function(first, second) {
  if (eqArrays(first, second)) {
    console.log(`👏👏👏 Assertion Passed: ${first} === ${second}`);
  } else console.log(`❌ ❌ ❌ Assertion Failed: ${first} !== ${second}`);
}

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]))
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1]))
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]))
