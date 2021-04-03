const {
  rectangleangled,
  rectanglefilled,
  rectanglehollow,
  rectanglealternating,
  rectangleinterlaced
} = require('./rectangleLib');

const {
  triangleangled,
  trianglefilled,
  trianglehollow,
  trianglealternating,
  triangleinterlaced
} = require('./triangleLib');

const {
  diamondangled,
  diamondfilled,
  diamondhollow,
  diamondalternating,
  diamondinterlaced
} = require('./diamondLib');

const { getValue } = require('./utility');

const isArgumentIsAnInteger = argument => +argument > 0 && +argument % 1 == 0;

const isEveryPairValid = function (elementArray) {
  const options = ['-s', '-p'];
  const geometricFeatures = [
    'triangle',
    'rectangle',
    'diamond',
    'filled',
    'hollow',
    'alternating',
    'interlaced',
    'angled'
  ];
  if (elementArray[0] == '-d') {
    let diamensions = elementArray[1].split(',');
    return diamensions.every(isArgumentIsAnInteger);
  }
  if (
    options.includes(elementArray[0]) &&
    geometricFeatures.includes(elementArray[1])
  ) {
    return true;
  }
  return false;
};

const isArgumentsNotValid = function (cmdArgus) {
  if (cmdArgus.length % 2 != 0) {
    return true;
  }
  const pairs = slicing(cmdArgus);
  return !pairs.every(isEveryPairValid);
};

const slicing = function (array) {
  const returnArray = [];
  for (index = 0; index < array.length; index += 2) {
    returnArray.push([array[index], array[index + 1]]);
  }
  return returnArray;
};

const printAccordingToOptions = function (orderedArgus) {
  const funcArrays = [
    ['rectanglefilled', rectanglefilled],
    ['rectanglehollow', rectanglehollow],
    ['rectanglealternating', rectanglealternating],
    ['rectangleinterlaced', rectangleinterlaced],
    ['rectangleangled', rectangleangled],
    ['trianglefilled', trianglefilled],
    ['trianglehollow', trianglehollow],
    ['trianglealternating', trianglealternating],
    ['triangleinterlaced', triangleinterlaced],
    ['triangleangled', triangleangled],
    ['diamondfilled', diamondfilled],
    ['diamondhollow', diamondhollow],
    ['diamondalternating', diamondalternating],
    ['diamondinterlaced', diamondinterlaced],
    ['diamondangled', diamondangled]
  ];
  const diamensions = orderedArgus[2].split(',');
  const action = getValue(funcArrays, orderedArgus[0] + orderedArgus[1]);
  return action(+diamensions[0], +diamensions[1]);
};

module.exports = {
  slicing,
  printAccordingToOptions,
  isArgumentsNotValid,
  isEveryPairValid
};
