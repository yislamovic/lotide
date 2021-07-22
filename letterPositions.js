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

const letterPositions = function (sentence) {
  let results = {};
  for (let char of sentence) {
    for (let i = 0; i < sentence.length; i++) {
      if(results[char]){
        if(char === sentence[i] && !results[char].includes(i)){
          results[char].push(i);
        }  
      }
      else{
        results[char] = [];
      }
    }
  }
  return results;
};
console.log(letterPositions('lollmaorofl'));