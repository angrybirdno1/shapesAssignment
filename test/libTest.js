const rectanglefilled = require('../src/lib.js').rectanglefilled;
const rectanglehollow = require('../src/lib.js').rectanglehollow;
const rectanglealternating = require('../src/lib.js').rectanglealternating;
const trianglefilled = require('../src/lib.js').trianglefilled;
const trianglehollow = require('../src/lib.js').trianglehollow;
const trianglealternating = require('../src/lib.js').trianglealternating;
const printPattern = require('../src/lib.js').printPattern;

const assert = require('assert');

describe('test of printPattern function',function(){
  it('should return empty string for invalid input',function(){
    assert.strictEqual(printPattern(['-s']),'');
    assert.strictEqual(printPattern(['-s','tria']),'');
    assert.strictEqual(printPattern(['-d','f,t']),'');
  })
  it('should return default pattern if no arguments are given',function(){
    assert.strictEqual(printPattern([]),'*****\n*****\n*****\n*****\n*****');
  })
  it('should take the last argument if same pattern repeat more than one time',function(){
    assert.strictEqual(printPattern(['-s','triangle','-s','rectangle']),'*****\n*****\n*****\n*****\n*****');
  })
})
