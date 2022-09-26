// const args = process.argv;
const pigString = require('./pigString')

const pigLatin = function(array) {
  for (x = 2; x < array.length; x++) { //created function to work with command line arguments, change x to 0 for normal array
    console.log(pigString(array[x]));
  }
};
// console.log(pigLatin(args));

module.exports = pigLatin;