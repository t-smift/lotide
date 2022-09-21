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

const without = function(source, itemsToRemove) {
  let result = []
  result = result.concat(source);
  for (let x = 0; x < source.length; x++) {
    for (let y = 0; y < itemsToRemove.length; y++) {
      if (result[x] === itemsToRemove[y]) {
        result.splice(x, 1);
      }
    }
  }
  return result
}
console.log(without(["1", "2", "3"], [1, "2", "3"]))
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without([1, 2, 3, 1, 2, 3], [1, 2]), [3, 3]);
assertArraysEqual(without([1, 2, 3, 1, 2, 3], [1]), [2, 3, 2, 3]);