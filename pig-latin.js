const args = process.argv;
const pigString = function(str) {
  let pigLatin = "";
  let tail = str.slice(1);
  pigLatin = tail + str[0] + "ay";
  return pigLatin;
};
const pigLatin = function(array) {
  for (x = 2; x < array.length; x++) {
    console.log(pigString(array[x]));
  }
};
console.log(pigLatin(args));