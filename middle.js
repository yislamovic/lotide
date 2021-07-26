const middle = function (array) {
  let newArray = [];
  if (array.length <= 2) {
    return newArray;
  }
  else {
    for (let i = 0; i < array.length; i++) {
      for (let j = array.length - 1; j > 0; j--) {
        if (array.length % 2 === 0) { //even
          if (j === (i - 1)) {
            newArray.push(array[j]);
            newArray.push(array[i]);
          }
        }
        if (array.length % 2 === 1) { //odd
          if (j === i) {
            newArray.push(array[j]);
          }
        }
        i++;
      }
    }
  }
  return newArray;
}
module.exports = middle;


