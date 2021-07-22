const assertEqual = function (actual, expected) {
  let string = '';
  if (actual === expected) {
    string = console.log(`✅Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    string = console.log(`❌Assertion Failed: [${actual}] === [${expected}]`);
  }
  return string;
};

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

const countLetters = function(str){
  let obj = {};
  for(let char of str){
    if (obj[char]) {
      obj[char] += 1;
    }
    else {
      obj[char] = 1;
    }
  }
  return obj;
}
console.log(countLetters('here'));