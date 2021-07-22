const assertEqual = function (actual, expected) {
  let string = '';
  if (actual === expected) {
    string = console.log(`✅Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    string = console.log(`❌Assertion Failed: [${actual}] === [${expected}]`);
  }
  return string;
};
const findKeyByValue = function (tvShowsObj, value) {
  const values = Object.values(tvShowsObj);
  const keys = Object.keys(tvShowsObj);
  let index = undefined;
  let key = undefined;
  for(let i = 0; i < values.length; i++){
    for(let j = 0; j < keys.length; j++){
      if(values[i] === value){
        index = values.indexOf(values[i]);
      }
      if(index === j){
        key = keys[j];
      }
    }
  }
  return key;
}

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);