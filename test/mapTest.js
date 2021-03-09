const map = require('../map');
const assert = require('chai').assert;

const words = 'lighthouse in the house';
const words2 = ["ground", "control", "to", "major", "tom"];

const results1 = map(words2, word => word[0]);

const results2 = map(words2, word => word.length);


describe('#map', () => {
  it("return [ 'g', 'c', 't', 'm', 't' ]", () => {
    assert.deepEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
  });
  it("return [6,7,2,5,3]", () => {
    assert.deepEqual(results2, [6,7,2,5,3]);
  });
});
