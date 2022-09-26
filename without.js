const without = function(source, itemsToRemove) {
  let result = [];
  result = result.concat(source);
  for (let x = 0; x < source.length; x++) {
    for (let y = 0; y < itemsToRemove.length; y++) {
      if (result[x] === itemsToRemove[y]) {
        result.splice(x, 1);
      }
    }
  }
  return result;
};
// console.log(without(["1", "2", "3"], [1, "2", "3"]))
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
// assertArraysEqual(without([1, 2, 3, 1, 2, 3], [1, 2]), [3, 3]);
// assertArraysEqual(without([1, 2, 3, 1, 2, 3], [1]), [2, 3, 2, 3]);

module.exports = without;