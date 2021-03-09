const without = require('../without');
const assert = require('chai').assert;




describe('#without', () => {
  it('return ["hello", "world", "lighthouse"]', () => {
    const words = ["hello", "world", "lighthouse"];
    assert.deepEqual(without(words, ['lighthouse']), ['hello', 'world']);
  });
  it('return [2, 3]', () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it('return ["1", "2"]', () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
});