const isArgumentsNotValid = require('../src/subFunction.js').isArgumentsNotValid;
const isEveryPairValid = require('../src/subFunction.js').isEveryPairValid;
const slicing = require('../src/subFunction.js').slicing;
const printAccordingToOptions = require('../src/subFunction.js').printAccordingToOptions;

const assert = require('assert');

describe('test of slcing function',function(){
  it('should give a paired array of array back',function(){
    assert.deepEqual(slicing([1,2]),[[1,2]]);
  })
  it('if number of entered elements are odd the out put should include undefined',function(){
    assert.deepEqual(slicing([1,2,3]),[[1,2],[3,undefined]]);
  })
})

describe('testing  for pair validation function',function(){
  it('should return true for a valid pair',function(){
    assert.ok(isEveryPairValid(['-s','triangle']),true);
    assert.ok(isEveryPairValid(['-p','hollow']),true);
    assert.ok(isEveryPairValid(['-d','4,5,3']),true);
  })
})

describe('testing of isArgumentsNotValid function',function(){
  it('should return true for invalid arguments',function(){
    assert.ok(isArgumentsNotValid(['-s','tris']),true);
    assert.ok(isArgumentsNotValid(['-s','triangle','-p']),true);
    assert.ok(isArgumentsNotValid(['-s','triangle','-d','f']),true);
    assert.ok(isArgumentsNotValid(['-s','triangle','-d','f,fgd,f,h']),true);
  })
  it('should return false for valid arguments',function(){
    assert.deepEqual(isArgumentsNotValid(['-s','triangle']),false);
    assert.deepEqual(isArgumentsNotValid([]),false);
    assert.deepEqual(isArgumentsNotValid(['-p','hollow']),false);
    assert.deepEqual(isArgumentsNotValid(['-d','3,5,2']),false);
  })
})

describe('testing of printAccordingToOptions function',function(){
  it('it should return a specific pattern according to the options',function(){
    assert.deepEqual(printAccordingToOptions(['triangle','filled','4']),'*\n**\n***\n****');
  })
  /*it('should return empty string if argument is incorrect',function(){
    assert.deepEqual(printAccordingToOptions(['triangle','filled']),'');
  })*/
})
