const findKey = require('../findKey');
const assert = require('chai').assert;

describe('#findKey', () => {
  it('return noma', () => {
    const starObj = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };

    const findKeyResult = findKey(starObj, x => x.stars === 2);

    assert.strictEqual(findKeyResult, 'noma');
  });
  it('return undefined', () => {
    const starObj = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    const findKeyResult = findKey(starObj, x => x.stars === 9);
    assert.strictEqual(findKeyResult, undefined);
  });
});