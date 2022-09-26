const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👏👏👏 Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(string) {
  let counted = {};
  for (let x = 0; x < string.length; x++) {
    let char = string[x];
    if (char !== " ") {
      if (counted[char]) {
        counted[char] += 1;
      } else {
        counted[char] = 1;
      }
    }
  }  
  return counted;
};
const test = "How many letters are in this sentence";
console.log(countLetters(test));



const countLetters2 = function(str) {
  const results = {};

  for (const char2 of str) {
    if (char2 !== " ") {
      if (!results[char]) {
        results[letter] = 0;
      }
      results[char2] ++;
    }  
  }
  return results;
};

const result = countLetters2("Hello World")
console.log(result);

