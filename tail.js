function tail(array) {
  let emptyArr = [];
  let newArr = [];
  if (array === undefined) {
    return emptyArr;
  } else if (array.length === 1) {
    return emptyArr;
  } else {
    for (let i = 1; i < array.length; i++) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

module.exports = tail;



