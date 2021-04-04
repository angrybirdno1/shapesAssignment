const {
  isEven,
  hollowLine,
  filledLine,
  angledLine,
  interLacedLine,
  alternatingLine
} = require('./utility');

const arrayGeneratorDiamond = function (height) {
  if (height % 1 != 0) {
    return [];
  }
  const diamondArray = [];
  let numOfSpaces = Math.floor(height / 2);
  let numOfChar = 1;
  for (let index = 0; index < height; index = index + 2) {
    diamondArray.push([numOfSpaces, numOfChar]);
    numOfChar = numOfChar + 2;
    numOfSpaces = numOfSpaces - 1;
  }
  return diamondArray.concat(
    diamondArray.slice(0, diamondArray.length - 1).reverse()
  );
};

const diamondfilled = function (height) {
  const diamondArray = arrayGeneratorDiamond(height);
  return isEven(height) ? '' : diamondArray.map(filledLine).join('\n');
};

const diamondhollow = function (height) {
  const diamondArray = arrayGeneratorDiamond(height);
  return isEven(height)
    ? ''
    : diamondArray.map(hollowLine(diamondArray.length)).join('\n');
};

const diamondalternating = function (height) {
  const diamondArray = arrayGeneratorDiamond(height);
  return isEven(height)
    ? ''
    : diamondArray.map(alternatingLine(diamondArray.length)).join('\n');
};

const diamondinterlaced = function (height) {
  const diamondArray = arrayGeneratorDiamond(height);
  return isEven(height)
    ? ''
    : diamondArray.map(interLacedLine(diamondArray.length)).join('\n');
};

const diamondangled = function (height) {
  const diamondArray = arrayGeneratorDiamond(height);
  return isEven(height)
    ? ''
    : diamondArray.map(angledLine(diamondArray.length)).join('\n');
};

module.exports = {
  diamondangled,
  diamondfilled,
  diamondhollow,
  diamondalternating,
  diamondinterlaced
};
