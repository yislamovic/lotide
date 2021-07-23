const assertEqual = function(actual, expected) {
  let string = '';
  if (actual === expected) {
    string = console.log(`✅Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    string = console.log(`❌Assertion Failed: [${actual}] === [${expected}]`);
  }
  return string;
};
const findKey = function(object, callback){
  let result;
  for(let key in object){
    if(callback(object[key]) === true){
      return key;
    }
    if(!callback(object[key])){
      result = undefined;
    }
  }
  return result;
}
console.log(assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2), "noma"));

console.log(assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 1 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 1 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2), undefined));

