const countLetters = function(string) {
  let counted = {};
  for (let x = 0; x < string.length; x++) {
    let char = string[x];
    if (char !== " ") {  //doesn't count spaces in the output
      if (counted[char]) {
        counted[char] += 1;
      } else {
        counted[char] = 1;
      }
    }
  }  
  return counted;
};
// const test = "How many letters are in this sentence";
// console.log(countLetters(test));

module.exports = countLetters;