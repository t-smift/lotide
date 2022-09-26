const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👏👏👏 Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`);
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function(object, value) {
  for (let key in object) {
    if (object[key] === value) {
    return key; 
    }
  }
}
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

