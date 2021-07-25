const swapper = function (key1, object1, key2, object2) {

  console.log('Swap!');

  let value1;
  let index1;
  let index2;
  let value2;

  for (let key in object1) {
    if (key === key1) {
      value1 = object1[key];
      index1 = key;
    }

    for (let k in object2) {
      if (key === key1) {
        value2 = object2[k];
        index2 = k;
      }
    }
  }

  if (value2 && value1 !== undefined) {
    object2[index2] = value1;
    object1[index1] = value2;
  }

  console.log('object1: ', object1);
  console.log('object2: ', object2);
};

swapper('a', { a: 1, b: 2, c: 3 }, 'c', { a: 4, b: 3, c: 5 });
swapper('b', { a: 8, b: 7, c: 6 }, 'd', { a: 5, b: 1, c: 2, d: 12 });
swapper('c', { a: 1, b: 3, c: 3, d: 7 }, 'c', { a: 4, b: 0, c: 5 });