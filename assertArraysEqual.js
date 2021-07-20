const eqArrays = function (array1, array2) {
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
console.log(eqArrays([1,2],[1,2]));
console.log(eqArrays([1,2],[1,"2"]));