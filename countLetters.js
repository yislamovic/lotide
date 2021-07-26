const countLetters = function(str){
  let obj = {};
  for(let char of str){
    if (obj[char]) {
      obj[char] += 1;
    }
    else {
      obj[char] = 1;
    }
  }
  return obj;
}
module.exports = countLetters;