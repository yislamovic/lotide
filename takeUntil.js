const asserArraysEqual = function (array1, array2) {
  let bool = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        bool[i] = true;
      }
      else {
        bool[i] = false;
      }
      i++;
    }
  }
  return (!bool.includes(false)) ? "✅Both arrays equal" : "❌The arrays not equal";
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
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
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log(asserArraysEqual(results1, [1, 2, 5, 7, 2]));
console.log(asserArraysEqual(results2, ["I've", 'been', 'to', 'Hollywood']));