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
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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
        if (object1[key] === object2[key]) {
        }
        else {
          return false;
        }
      }
    }
    return true;
  }
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false
console.log('\n');
console.log('\n');

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false