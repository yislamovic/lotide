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
module.exports = findKey;
