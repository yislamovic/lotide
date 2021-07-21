const assertEqual = function (actual, expected) {
  let string = '';
  if (actual === expected) {
    string = console.log(`✅Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    string = console.log(`❌Assertion Failed: [${actual}] === [${expected}]`);
  }
  return string;
};

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
  return !bool.includes(false);
}

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

const middle = function (array) {
  let newArray = [];
  if (array.length <= 2) {
    return newArray;
  }
  else {
    for (let i = 0; i < array.length; i++) {
      for (let j = array.length - 1; j > 0; j--) {
        if (array.length % 2 === 0) { //even
          if (j === (i - 1)) {
            newArray.push(array[j]);
            newArray.push(array[i]);
          }
        }
        if (array.length % 2 === 1) { //odd
          if (j === i) {
            newArray.push(array[j]);
          }
        }
        i++;
      }
    }
  }
  return newArray;
}

console.log(middle([9, 2, 8, 4, -1, 10]));//even; returns [8, 4]
console.log(asserArraysEqual([9, 2, 8, 4, -1, 10], middle([9, 2, 8, 4, -1, 10])));
console.log('\n');

console.log(middle([1, 1, 3, 9, -7, 10, -3, -9, 4, 5, 4]));// odd; returns [10]
console.log(asserArraysEqual([1, 1, 3, 9, 0, 1, -3, -9, 4, 5, 4], middle([1, 1, 3, 9, 0, 1, -3, -9, 4, 5, 4])));
