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

const assertArraysEqual = function(first, second) {
  if (eqArrays(first, second)) {
    console.log(`👏👏👏 Assertion Passed: ${first} === ${second}`);
  } else console.log(`❌ ❌ ❌ Assertion Failed: ${first} !== ${second}`);
}

const flatten = function(array) {
  let flattened = [];
  for (x = 0; x < array.length; x++) {
    if (Array.isArray(array[x])) {
      for (let y = 0; y < array[x].length; y++) {
        flattened.push(array[x][y]);
      }
    } else {
      flattened.push(array[x])
    }
  }  
  return flattened
}
console.log(flatten([1, 2, [3, 4], 5, [6]]));