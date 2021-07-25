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
const eqObjects = function (object1, object2) {
  const keysObj1 = Object.keys(object1);
  const keysObj2 = Object.keys(object1);
  if (keysObj1.length !== keysObj2.length) {
    return false;
  }
  else {
    for (let key of keysObj1) {
      let keyArr1 = Array.isArray(object1[key]);
      let keyArr2 = Array.isArray(object2[key]);
      if (keyArr1 && keyArr2) {
        return eqArrays(keyArr1, keyArr2);
      }
      else {
        let type0 = typeof object1[key];
        let type1 = typeof object2[key];
        if (object1[key] !== object2[key]) {
          return false;
        }
        else {
          if(type0 && type1 === Function){
            if(object1[key].toString() !== object2[key].toString()){
              return false;
            }
          }
        }
      }
    }
    return true;
  }
};
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let bool = eqObjects(actual, expected);
  return (bool !== (false)) ? `✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
  : `❌Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
};
//passing assertions
console.log(assertObjectsEqual({a: 1, b: 2}, {a: 1, b: 2}));
console.log(assertObjectsEqual({a: 1, b: 2, c: '3'}, {a: 1, b: 2, c: '3'}));
// work in progress feature //check equality for functions 
//console.log(assertObjectsEqual({a: 1, b: x => x}, {a: 1, b: x => x}));
//Unequal Objects
console.log('\n');
console.log(assertObjectsEqual({a: 1, b: 2}, {a: 1, b: 3}));
console.log(assertObjectsEqual({a: 1, b: 2, c: 3}, {a: 1, b: 2}));
console.log(assertObjectsEqual({a: 1, b: 2}, {a: '1', b: '3'}));