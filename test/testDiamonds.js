const diamondfilled = require('../src/diamondLib.js').diamondfilled;
const diamondhollow = require('../src/diamondLib.js').diamondhollow;
const diamondalternating = require('../src/diamondLib.js').diamondalternating;
const diamondinterlaced = require('../src/diamondLib.js').diamondinterlaced;
const diamondangled = require('../src/diamondLib.js').diamondangled;
const assert = require('assert');

describe('test of diamond shapes',function(){
  it('should give filled diamond based on the height',function(){
    assert.strictEqual(diamondfilled(4),"");
    assert.strictEqual(diamondfilled(5),"  *\n ***\n*****\n ***\n  *");
    assert.strictEqual(diamondfilled(0),"");
    assert.strictEqual(diamondfilled('r'),'');
    assert.strictEqual(diamondfilled(-3),'');
  })
  it('should give hollow diamond based on the height',function(){
    assert.strictEqual(diamondhollow(4),"");
    assert.strictEqual(diamondhollow(5),"  *\n * *\n*   *\n * *\n  *");
    assert.strictEqual(diamondhollow(0),"");
    assert.strictEqual(diamondhollow("r"),"");
    assert.strictEqual(diamondhollow(3.3),"");
    assert.strictEqual(diamondhollow(-3),'');
  })
  it('should give alternating diamond based on the height',function(){
    assert.strictEqual(diamondalternating(5),"  -\n +++\n-----\n +++\n  -");
    assert.strictEqual(diamondalternating(4),'');
    assert.strictEqual(diamondalternating(0),'');
    assert.strictEqual(diamondalternating('r'),'');
    assert.strictEqual(diamondalternating(-3),'');
  })
  it('should return interlaced diamond based on the height',function(){
    assert.strictEqual(diamondinterlaced(4),'');
    assert.strictEqual(diamondinterlaced(5),"  -\n +-+\n-+-+-\n +-+\n  -");
    assert.strictEqual(diamondinterlaced(0),'');
    assert.strictEqual(diamondinterlaced('r'),'');
    assert.strictEqual(diamondinterlaced(-3),'');
  })
  it('should give angled diamond',function(){
    assert.strictEqual(diamondangled(4),'');
    assert.strictEqual(diamondangled(5),"  *\n / \\\n*   *\n \\ /\n  *");
    assert.strictEqual(diamondangled(0),'');
    assert.strictEqual(diamondangled('r'),'');
    assert.strictEqual(diamondangled(-3),'');
  })
})
