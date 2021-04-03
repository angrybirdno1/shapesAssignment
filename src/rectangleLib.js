const {
  hollowLine,
  filledLine,
  alternatingLine,
  interLacedLine
} = require('./utility');

const arrayGeneratorOfRect = function (row, column) {
  if (row % 1 != 0 || column % 1 != 0) {
    return [];
  }
  rectArray = [];
  for (let index = 0; index < row && column >= 0; index++) {
    rectArray.push([0, column]);
  }
  return rectArray;
};

const rectanglefilled = function (row, column) {
  const rectangleArray = arrayGeneratorOfRect(row, column);
  return rectangleArray.map(filledLine).join('\n');
};

const rectanglehollow = function (row, column) {
  const rectangleArray = arrayGeneratorOfRect(row, column);
  return rectangleArray.map(hollowLine(rectangleArray.length)).join('\n');
};

const rectanglealternating = function (row, column) {
  const rectangleArray = arrayGeneratorOfRect(row, column);
  return rectangleArray.map(alternatingLine(rectangleArray.length)).join('\n');
};

const rectangleinterlaced = function (row, column) {
  const rectangleArray = arrayGeneratorOfRect(row, column);
  return rectangleArray.map(interLacedLine(rectangleArray.length)).join('\n');
};

module.exports = {
  rectangleangled: () => '',
  rectanglefilled,
  rectanglehollow,
  rectanglealternating,
  rectangleinterlaced
};
