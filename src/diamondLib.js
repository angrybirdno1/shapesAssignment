const hollowLine = require("./utility.js").hollowLine;
const filledLine = require("./utility.js").filledLine;
const alternatingLine = require("./utility.js").alternatingLine;
const interLacedLine = require("./utility.js").interLacedLine;
const angledLine = require("./utility.js").angledLine;

const arrayGeneratorDiamond = function(height) {
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

const diamondfilled = function(height) {
  const diamondArray = arrayGeneratorDiamond(height);
  return height % 2 == 0 ? "" : diamondArray.map(filledLine).join("\n");
};

const diamondhollow = function(height) {
  const diamondArray = arrayGeneratorDiamond(height);
  return height % 2 == 0
    ? ""
    : diamondArray.map(hollowLine(diamondArray.length)).join("\n");
};

const diamondalternating = function(height) {
  const diamondArray = arrayGeneratorDiamond(height);
  return height % 2 == 0
    ? ""
    : diamondArray.map(alternatingLine(diamondArray.length)).join("\n");
};

const diamondinterlaced = function(height) {
  const diamondArray = arrayGeneratorDiamond(height);
  return height % 2 == 0
    ? ""
    : diamondArray.map(interLacedLine(diamondArray.length)).join("\n");
};

const diamondangled = function(height) {
  const diamondArray = arrayGeneratorDiamond(height);
  return height % 2 == 0
    ? ""
    : diamondArray.map(angledLine(diamondArray.length)).join("\n");
};

exports.diamondfilled = diamondfilled;
exports.diamondhollow = diamondhollow;
exports.diamondalternating = diamondalternating;
exports.diamondinterlaced = diamondinterlaced;
exports.diamondangled = diamondangled;
