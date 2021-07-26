const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("from [9, 2, 8, 4, -1, 10] returns middle [8, 4]", () => {
    assert.deepEqual(middle([9, 2, 8, 4, -1, 10]), [8, 4]);
  });
  it("from [1, 1, 3, 9, -7, 10, -3, -9, 4, 5, 4] returns middle [10]", () => {
    assert.deepEqual(middle([1, 1, 3, 9, -7, 10, -3, -9, 4, 5, 4]), [10]);
  });
});

