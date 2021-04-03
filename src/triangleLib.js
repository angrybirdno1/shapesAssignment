const {
  hollowLine,
  filledLine,
  alternatingLine,
  interLacedLine
} = require('./utility');

const arrayGeneratorTriangle = height => {
  if (height % 1 != 0) {
    return [];
  }
  triangleArray = [];
  for (let index = 1; index <= height; index++) {
    triangleArray.push([0, index]);
  }
  return triangleArray;
};

const trianglefilled = height => {
  const triangleArray = arrayGeneratorTriangle(height);
  return triangleArray.map(filledLine).join('\n');
};

const trianglehollow = height => {
  const triangleArray = arrayGeneratorTriangle(height);
  return triangleArray.map(hollowLine(triangleArray.length)).join('\n');
};

const trianglealternating = height => {
  const triangleArray = arrayGeneratorTriangle(height);
  return triangleArray.map(alternatingLine(triangleArray.length)).join('\n');
};

const triangleinterlaced = height => {
  const triangleArray = arrayGeneratorTriangle(height);
  return triangleArray.map(interLacedLine(triangleArray.length)).join('\n');
};

module.exports = {
  triangleangled: () => '',
  trianglefilled,
  trianglehollow,
  trianglealternating,
  triangleinterlaced
};
