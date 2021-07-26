const countOnly = function (allItems, itemsToCount) {
  let obj = {};
  for (let i = 0; i < allItems.length; i++) {
    for (let item in itemsToCount) {
      if (item === allItems[i]) {
        if (itemsToCount[item] === true) {
          if (obj[item]) {
            obj[item] += 1;
          }
          else {
            obj[item] = 1;
          }
        }
      }
    }
  }
  return obj;
}
module.exports = countOnly;

