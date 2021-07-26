const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

console.log(middle([9, 2, 8, 4, -1, 10]));//even; returns [8, 4]
console.log(assertArraysEqual([8, 4], middle([9, 2, 8, 4, -1, 10])));
console.log('\n');
console.log(middle([1, 1, 3, 9, -7, 10, -3, -9, 4, 5, 4]));// odd; returns [10]
console.log(assertArraysEqual([10], middle([1, 1, 3, 9, -7, 10, -3, -9, 4, 5, 4])));