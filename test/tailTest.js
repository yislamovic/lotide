const assertEqual = require('../assertEqual');
const tail = require('../tail');

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