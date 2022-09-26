const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]),[]);
  });
  it("returns [] for []", () => {
    assert.deepEqual(middle([]),[]);
  });
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), 2);
  });
  it("returns 3 for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), 3);
  });
  it("returns [4, 5] for [1, 2, 3, 4, 5, 6, 7, 8]", () => {
    assert.deepEqual(middle([1]),[]);
  });
});