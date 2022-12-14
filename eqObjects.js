const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (let x in obj1) {
    if (Array.isArray(obj1[x]) && Array.isArray(obj2[x])) {
      return eqArrays(obj1[x], obj2[x]);
    }
    else if (obj1[x] !== obj2[x]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
// const ab = { a: "1", b: "2", d: "4"};
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba));
// // asserEqual(eqObjects(ab, ba), true); 

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); 

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, dc), true); // => true
// assertEqual(eqObjects(cd, cd2), false); // => false)