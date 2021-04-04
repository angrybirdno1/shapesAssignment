const getAllActions = function () {
  const actions = {};
  Object.assign(actions, require('./diamondLib'));
  Object.assign(actions, require('./triangleLib'));
  Object.assign(actions, require('./rectangleLib'));
  return actions;
};

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
    return elementArray[1].split(',').every(isArgumentIsAnInteger);
  }
  return (
    options.includes(elementArray[0]) &&
    geometricFeatures.includes(elementArray[1])
  );
};

const isArgumentsNotValid = function (cmdArgus) {
  return cmdArgus.length % 2 != 0
    ? true
    : !slicing(cmdArgus).every(isEveryPairValid);
};

const slicing = function (array) {
  const returnArray = [];
  for (index = 0; index < array.length; index += 2) {
    returnArray.push([array[index], array[index + 1]]);
  }
  return returnArray;
};

const printAccordingToOptions = function (orderedArgus) {
  const dimensions = orderedArgus[2].split(',');
  const action = getAllActions()[orderedArgus[0] + orderedArgus[1]];
  return action(+dimensions[0], +dimensions[1]);
};

module.exports = {
  slicing,
  printAccordingToOptions,
  isArgumentsNotValid,
  isEveryPairValid
};
