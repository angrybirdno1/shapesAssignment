const rectanglefilled = require('../src/rectangleLib.js').rectanglefilled;
const rectanglehollow = require('../src/rectangleLib.js').rectanglehollow;
const rectanglealternating = require('../src/rectangleLib.js').rectanglealternating;
const rectangleinterlaced = require('../src/rectangleLib.js').rectangleinterlaced;
const rectangleangled = require('../src/rectangleLib.js').rectangleangled;

const assert = require('assert');

describe('test of rectangle shapes',function(){
  it('should give filled rectangle based on the height',function(){
    assert.strictEqual(rectanglefilled(3,4),"****\n****\n****");
    assert.strictEqual(rectanglefilled(0,0),"");
    assert.strictEqual(rectanglefilled('r','d'),'');
    assert.strictEqual(rectanglefilled(4,-3),'');
  })
  it('should give hollow rectangle based on the height',function(){
    assert.strictEqual(rectanglehollow(3,4),"****\n*  *\n****");
    assert.strictEqual(rectanglehollow(0,0),"");
    assert.strictEqual(rectanglehollow("r",'d'),"");
    assert.strictEqual(rectanglehollow(3,4.4),"");
    assert.strictEqual(rectanglehollow(4,-3),'');
  })
  it('should give alternating rectangle based on the height',function(){
    assert.strictEqual(rectanglealternating(3,4),'----\n++++\n----');
    assert.strictEqual(rectanglealternating(0,0),'');
    assert.strictEqual(rectanglealternating('r','d'),'');
    assert.strictEqual(rectanglealternating(4,-3),'');
  })
  it('should return interlaced rectangle based on the height',function(){
    assert.strictEqual(rectangleinterlaced(3,4),'-+-+\n+-+-\n-+-+');
    assert.strictEqual(rectangleinterlaced(0,0),'');
    assert.strictEqual(rectangleinterlaced('r','d'),'');
    assert.strictEqual(rectangleinterlaced(4,-3),'');
  })
  it('should give empty string',function(){
    assert.strictEqual(rectangleangled(3,4),'');
    assert.strictEqual(rectangleangled(0,0),'');
    assert.strictEqual(rectangleangled('r','d'),'');
    assert.strictEqual(rectangleangled(4,-3),'');
  })
})
