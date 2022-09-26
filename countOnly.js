const countOnly = function(allItems, itemsToCount) {
  let counted = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (counted[item]) {
        counted[item] += 1;
      } else {
        counted[item] = 1;
      }
    }  
    // implied action for if the item DOES exist in itemsToCount, but the value is set to false. Nothing happens
  }  
  return counted;
}


module.exports = countOnly;

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];
// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);