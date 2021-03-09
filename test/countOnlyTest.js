const countOnly = require('../countOnly');
const assert = require('chai').assert;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe('#countOnly', () => {
  it('Return true to result Jason: 1', () => {
    assert.strictEqual(result1["Jason"], 1);
  });
  it('Return undefined to result Karima', () => {
    assert.strictEqual(result1["Karima"], undefined);
  });
  it('Return true to result Fang: 2', () => {
    assert.strictEqual(result1["Fang"], 2);
  });
  it('Return undefined to result Agouhanna', () => {
    assert.strictEqual(result1["Agouhanna"], undefined);
  });

});
