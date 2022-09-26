var eqArrays = require('./eqArrays')
const eqObjects = require('./eqObjects')

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`👏👏👏 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ ❌ ❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);    
  }
};
module.exports = assertObjectsEqual;


// const ab = { a: "1", b: "2"};
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba));
// // asserEqual(eqObjects(ab, ba), true); 

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); 

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };
// // assertEqual(eqObjects(cd, dc), true); // => true
// // assertEqual(eqObjects(cd, cd2), false); // => false)
// assertObjectsEqual(ab, ba)
// assertObjectsEqual(cd, cd2)