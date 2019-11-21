const trianglefilled = require('../src/triangleLib.js').trianglefilled;
const trianglehollow = require('../src/triangleLib.js').trianglehollow;
const trianglealternating = require('../src/triangleLib.js').trianglealternating;
const triangleinterlaced = require('../src/triangleLib.js').triangleinterlaced;
const triangleangled = require('../src/triangleLib.js').triangleangled;
const assert = require('assert');

describe('test of triangle shapes',function(){
  it('should give filled triangle based on the height',function(){
    assert.strictEqual(trianglefilled(4),"*\n**\n***\n****");
    assert.strictEqual(trianglefilled(0),"");
    assert.strictEqual(trianglefilled('r'),'');
    assert.strictEqual(trianglefilled(-3),'');
  })
  it('should give hollow triangle based on the height',function(){
    assert.strictEqual(trianglehollow(4),"*\n**\n* *\n****");
    assert.strictEqual(trianglehollow(0),"");
    assert.strictEqual(trianglehollow("r"),"");
    assert.strictEqual(trianglehollow(3.3),"");
    assert.strictEqual(trianglehollow(-3),'');
  })
  it('should give alternating triangle based on the height',function(){
    assert.strictEqual(trianglealternating(4),'-\n++\n---\n++++');
    assert.strictEqual(trianglealternating(0),'');
    assert.strictEqual(trianglealternating('r'),'');
    assert.strictEqual(trianglealternating(-3),'');
  })
  it('should return interlaced triangle based on the height',function(){
    assert.strictEqual(triangleinterlaced(4),'-\n+-\n-+-\n+-+-');
    assert.strictEqual(triangleinterlaced(0),'');
    assert.strictEqual(triangleinterlaced('r'),'');
    assert.strictEqual(triangleinterlaced(-3),'');
  })
  it('should give empty string',function(){
    assert.strictEqual(triangleangled(4),'');
    assert.strictEqual(triangleangled(0),'');
    assert.strictEqual(triangleangled('r'),'');
    assert.strictEqual(triangleangled(-3),'');
  })
})

