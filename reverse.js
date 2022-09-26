// const args = process.argv;
const reverseString = require('./reverseString');

const reverse = function(array) {
  for (x = 2; x < array.length; x++) {
    console.log(reverseString(array[x]));
  }
};

// console.log(reverse(args));
// created to work with command line arguments, change x to 0 for reversing inputted array
module.exports = reverse;

