const eqObjects = function (object1, object2) {
  const keysObj1 = Object.keys(object1);
  const keysObj2 = Object.keys(object1);
  if (keysObj1.length !== keysObj2.length) {
    return false;
  }
  else {
    for (let key of keysObj1) {
      let keyArr1 = Array.isArray(object1[key]);
      let keyArr2 = Array.isArray(object2[key]);
      if (keyArr1 && keyArr2) {
        return eqArrays(keyArr1, keyArr2);
      }
      else {
        if (object1[key] === object2[key]) {
        }
        else {
          return false;
        }
      }
    }
    return true;
  }
};
module.exports = eqObjects;