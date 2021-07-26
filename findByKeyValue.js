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
module.exports = findKeyByValue;