
const flatten = function(array) {
  let flattened = [];
  for (x = 0; x < array.length; x++) {
    if (Array.isArray(array[x])) {
      for (let y = 0; y < array[x].length; y++) {
        flattened.push(array[x][y]);
      }
    } else {
      flattened.push(array[x]);
    }
  }
  return flattened;
};


module.exports = flatten;