const letterPositions = require('../letterPositions');
const assert = require('chai').assert;


describe('#letterPositions', () => {
  it('return letter counts as an object', () => {
    assert.deepEqual(letterPositions("hello"),{ h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] });
  });
});
