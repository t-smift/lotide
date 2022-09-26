const pigString = function(str) {
  let pigLatin = "";
  let tail = str.slice(1);
  pigLatin = tail + str[0] + "ay";
  return pigLatin;
};

module.exports = pigString;