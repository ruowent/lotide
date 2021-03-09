const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe('#eqObjects', () => {
  it('return true for ab ba comparison', () => {
    assert.deepEqual(eqObjects(ab, ba), true);
  });
  it('return false for ab, abc comparison', () => {
    assert.deepEqual(eqObjects(ab, abc), false);
  });
  it('return true for cd dc comparison', () => {
    assert.deepEqual(eqObjects(cd, dc), true);
  });
  it('return true for cd cd2 comparison', () => {
    assert.deepEqual(eqObjects(cd, cd2), false);
  });
});

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
