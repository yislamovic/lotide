const assertEqual = function (actual, expected) {
  let string = '';
  if (actual === expected) {
    string = console.log(`✅Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    string = console.log(`❌Assertion Failed: [${actual}] === [${expected}]`);
  }
  return string;
};

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