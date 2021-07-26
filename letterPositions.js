const letterPositions = function (sentence) {
  let results = {};
  for (let char of sentence) {
    for (let i = 0; i < sentence.length; i++) {
      if(results[char]){
        if(char === sentence[i] && !results[char].includes(i)){
          results[char].push(i);
        }  
      }
      else{
        results[char] = [];
      }
    }
  }
  return results;
};
module.exports = letterPositions;