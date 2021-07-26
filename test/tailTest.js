const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns [10, 18, 16] for [1, 10, 18, 16]", () => {
    assert.deepEqual(tail([1, 10, 18, 16]), [10, 18, 16]);
  });
});
