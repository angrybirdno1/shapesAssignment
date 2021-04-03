const {
  slicing,
  isArgumentsNotValid,
  printAccordingToOptions
} = require('./subFunction');

const { update } = require('./utility');

const printPattern = function (cmdArgus) {
  const pairs = slicing(cmdArgus);

  if (isArgumentsNotValid(cmdArgus)) {
    return '';
  }

  let defaultShape = [
    ['-s', 'rectangle'],
    ['-p', 'filled'],
    ['-d', '5,5']
  ];
  for (let index = 0; index < pairs.length; index++) {
    update(defaultShape, pairs[index][0], pairs[index][1]);
  }
  const orderedArguments = [
    defaultShape[0][1],
    defaultShape[1][1],
    defaultShape[2][1]
  ];

  return printAccordingToOptions(orderedArguments);
};

exports.printPattern = printPattern;
