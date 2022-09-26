const middle = function(array) {
  let midEle = [];
  let chars = array.length
  if (chars <= 2) {
    midEle = [];
  }
  if (chars > 2 && chars % 2 !== 0) {
    midEle = array[Math.floor(chars / 2)];
  }
  if (chars > 2 && chars % 2 === 0) {
    midEle = array.slice((chars / 2 - 1),(chars / 2 + 1));
  }
  return midEle;
};

module.exports = middle;