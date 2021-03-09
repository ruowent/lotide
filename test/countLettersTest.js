const countLetters = require('../countLetters');
const assert = require('chai').assert;

const words = 'lighthouse in the house';

describe('#countLetters', () => {
  it('return letter counts as an object', () => {
    assert.deepEqual(countLetters(words), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });
  });
});
