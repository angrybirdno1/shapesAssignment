const { insert, getValue } = require('../src/utility');

const assert = require('assert');

describe('test of different kinds of line functions', function () {
  it('should give undefined if the key is present in the table', function () {
    assert.strictEqual(insert([[0, 4]], 0, 4), undefined);
  });

  it('test insert', function () {
    const expected = [
      [0, 4],
      [1, 5]
    ];
    assert.deepStrictEqual(insert([[0, 4]], 1, 5), expected);
  });

  it('test getValue', function () {
    assert.deepStrictEqual(getValue([[0, 4]], 0), 4);
    assert.deepStrictEqual(getValue([[0, 4]], 1), undefined);
  });
});
