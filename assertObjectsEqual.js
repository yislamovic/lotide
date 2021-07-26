const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let bool = eqObjects(actual, expected);
  return (bool !== (false)) ? `✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
  : `❌Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
};


module.exports = assertObjectsEqual;