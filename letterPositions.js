const letterPosition = function(string) {
  let counted = {};
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
  return counted
}

const test = "How many letters are in this sentence"
console.log(letterPosition(test))