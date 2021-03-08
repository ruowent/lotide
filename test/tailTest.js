const tail = require('../tail');
const assert = require('chai').assert;



describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns 2", () => {
    assert.strictEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']).length, 2);
  });

});

