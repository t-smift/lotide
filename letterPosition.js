const letterPosition = function(string) {  //function that takes in a string and outputs an object, where each letter in the string is a key
  let counted = {};                        //and the valye is an array with each index where the letter occurs in the string
  for (let x = 0; x < string.length; x++) {
    let char = string[x];
    if (char !== " ") {
      if (counted[char]) {
        counted[char].push(x);
      } else {
        counted[char] = [x];
      }
    }
  }
  return counted;
};

module.exports = letterPosition;
// const test = "How many letters are in this sentence"
// console.log(letterPosition(test))