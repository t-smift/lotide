const args = process.argv;

const reverseString = function(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
};
const reverse = function(array) {
  let string = "";
  for (x = 2; x < array.length; x++) {
    string = reverseString(array[x]);
    console.log(string);
  }
};

console.log(reverse(args));

