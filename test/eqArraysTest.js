const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {
  it('return true for [1, 2, 3], [1, 2, 3]', () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it('return false for [1, 2, 3], [1, 5, 3]', () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 5, 3]), false);
  });
  it('return false for ["1", "2", "3"], ["1", "2", 3]', () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });

})

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [1, 5, 3]), false);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);