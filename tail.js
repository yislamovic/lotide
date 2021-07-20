const assertEqual = function(actual, expected) {
  let string = '';
  if (actual === expected) {
    string = console.log(`✅Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    string = console.log(`❌Assertion Failed: [${actual}] !== [${expected}]`);
  }
  return string;
};
function tail(array) {
  let emptyArr = [];
  let newArr = [];
  if (array === undefined) {
    return emptyArr;
  } else if (array.length === 1) {
    return emptyArr;
  } else {
    for (let i = 1; i < array.length; i++) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
const num = tail([1,2,3]);
assertEqual(num.length, 2);
assertEqual(num[0], 2);
assertEqual(num[1], 3);

console.log('\n');

const result = tail([1]);
assertEqual(result.length, 0);
assertEqual(result[0], 1);
assertEqual(result[1], 1);
console.log('\n');

const result1 = tail([]);
assertEqual(result1.length, 0);
assertEqual(result1[0], 0);


