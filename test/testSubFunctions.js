const {
  slicing,
  isEveryPairValid,
  isArgumentsNotValid,
  printAccordingToOptions
} = require('../src/subFunction.js');

const assert = require('assert');

describe('test of slcing function', function () {
  it('should give a paired array of array back', function () {
    assert.deepStrictEqual(slicing([1, 2]), [[1, 2]]);
  });
  it('if number of entered elements are odd the out put should include undefined', function () {
    assert.deepStrictEqual(slicing([1, 2, 3]), [
      [1, 2],
      [3, undefined]
    ]);
  });
});

describe('testing  for pair validation function', function () {
  it('should return true for a valid pair', function () {
    assert.ok(isEveryPairValid(['-s', 'triangle']), true);
    assert.ok(isEveryPairValid(['-p', 'hollow']), true);
    assert.ok(isEveryPairValid(['-d', '4,5,3']), true);
  });
});

describe('testing of isArgumentsNotValid function', function () {
  it('should return true for invalid arguments', function () {
    assert.ok(isArgumentsNotValid(['-s', 'tris']), true);
    assert.ok(isArgumentsNotValid(['-s', 'triangle', '-p']), true);
    assert.ok(isArgumentsNotValid(['-s', 'triangle', '-d', 'f']), true);
    assert.ok(isArgumentsNotValid(['-s', 'triangle', '-d', 'f,fgd,f,h']), true);
  });

  it('should return false for valid arguments', function () {
    assert.deepStrictEqual(isArgumentsNotValid(['-s', 'triangle']), false);
    assert.deepStrictEqual(isArgumentsNotValid([]), false);
    assert.deepStrictEqual(isArgumentsNotValid(['-p', 'hollow']), false);
    assert.deepStrictEqual(isArgumentsNotValid(['-d', '3,5,2']), false);
  });
});

describe('testing of printAccordingToOptions function', function () {
  it('it should return a specific pattern according to the options', function () {
    assert.deepStrictEqual(
      printAccordingToOptions(['triangle', 'filled', '4']),
      '*\n**\n***\n****'
    );
  });
  /*it('should return empty string if argument is incorrect',function(){
    assert.deepStrictEqual(printAccordingToOptions(['triangle','filled']),'');
  })*/
});
