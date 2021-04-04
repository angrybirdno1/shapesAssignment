const {
  slicing,
  isArgumentsNotValid,
  printAccordingToOptions
} = require('./subFunction');

const { update } = require('./utility');

const getDefaultShapes = function (pairs) {
  const defaultShape = [
    ['-s', 'rectangle'],
    ['-p', 'filled'],
    ['-d', '5,5']
  ];
  for (let index = 0; index < pairs.length; index++) {
    update(defaultShape, pairs[index][0], pairs[index][1]);
  }
  return defaultShape;
};

const printPattern = function (cmdArgs) {
  if (isArgumentsNotValid(cmdArgs)) {
    return '';
  }

  const defaultShape = getDefaultShapes(slicing(cmdArgs));
  const orderedArguments = [
    defaultShape[0][1],
    defaultShape[1][1],
    defaultShape[2][1]
  ];

  return printAccordingToOptions(orderedArguments);
};

exports.printPattern = printPattern;
