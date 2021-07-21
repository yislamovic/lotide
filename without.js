const without = function (sourceArray, itemsToRemoveArray) {
  let newArray = sourceArray;
  for (let i = 0; i < itemsToRemoveArray.length; i++) {
    while (newArray.includes(itemsToRemoveArray[i])) {
      let index = newArray.indexOf(itemsToRemoveArray[i]);
      newArray.splice(index, 1);
    }
  }
  return newArray;
};
console.log(without([1, 4, 5, 3], [3, 1]));
console.log(without([1, 4, 5, 3], [1, 2, '3']));
