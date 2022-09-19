const args = process.argv;

const reverseString = function(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
};
const reverse = function(array) {
  for (x = 2; x < array.length; x++) {
    console.log(reverseString(array[x]));
  }
};

console.log(reverse(args));

