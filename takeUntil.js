
const takeUntil = function (array, callback) {
  const results = [];
  let i = 0;
  let bool = true;
  while (array.length > i && bool) {
    if (callback(array[i]) === true) {
      bool = false;
    }
    else {
      results.push(array[i]);
    }
    i++;
  }
  return results;
}
module.exports = takeUntil;