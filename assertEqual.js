const assertEqual = function(actual, expected) {
  let string = '';
  if (actual === expected) {
    string = console.log(`✅Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    string = console.log(`❌Assertion Failed: [${actual}] === [${expected}]`);
  }
  return string;
};
assertEqual(1, 1);
assertEqual(1, 2);
assertEqual('hello', 'Hello');
assertEqual('HELLO', 'HELLO');