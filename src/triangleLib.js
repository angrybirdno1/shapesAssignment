const hollowLine = require("./utility.js").hollowLine;
const filledLine = require("./utility.js").filledLine;
const alternatingLine = require("./utility.js").alternatingLine;
const interLacedLine = require("./utility.js").interLacedLine;

const arrayGeneratorTriangle = function(height) {
  if (height % 1 != 0) {
    return [];
  }
  triangleArray = [];
  for (let index = 1; index <= height; index++) {
    triangleArray.push([0, index]);
  }
  return triangleArray;
};

const trianglefilled = function(height) {
  const triangleArray = arrayGeneratorTriangle(height);
  return triangleArray.map(filledLine).join("\n");
};

const trianglehollow = function(height) {
  const triangleArray = arrayGeneratorTriangle(height);
  return triangleArray.map(hollowLine(triangleArray.length)).join("\n");
};

const trianglealternating = function(height) {
  const triangleArray = arrayGeneratorTriangle(height);
  return triangleArray.map(alternatingLine(triangleArray.length)).join("\n");
};

const triangleinterlaced = function(height) {
  const triangleArray = arrayGeneratorTriangle(height);
  return triangleArray.map(interLacedLine(triangleArray.length)).join("\n");
};

const triangleangled = function(height) {
  return "";
};

exports.trianglefilled = trianglefilled;
exports.trianglehollow = trianglehollow;
exports.trianglealternating = trianglealternating;
exports.triangleinterlaced = triangleinterlaced;
exports.triangleangled = triangleangled;
