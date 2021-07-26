const without = function(source, itemsToRemove){
  let newArray = [];
  for(let i = 0; i < source.length; i++){
    newArray[i] = source[i];
  }
  for(let i = 0; i < itemsToRemove.length; i++){
    for(let j = 0; j < newArray.length; j++){
      if(itemsToRemove[i] === newArray[j]){
        newArray.splice(j, 1);
      }
    }
  }
  return newArray;
}
module.exports = without;