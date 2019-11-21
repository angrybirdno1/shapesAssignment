const rectanglefilled = require("./rectangleLib.js").rectanglefilled;
const rectanglehollow = require("./rectangleLib.js").rectanglehollow;
const rectanglealternating = require("./rectangleLib.js").rectanglealternating;
const trianglefilled = require("./triangleLib.js").trianglefilled;
const trianglehollow = require("./triangleLib.js").trianglehollow;
const trianglealternating = require("./triangleLib.js").trianglealternating;

const slicing = require("./subFunction.js").slicing;
const printAccordingToOptions = require("./subFunction.js")
  .printAccordingToOptions;
const isArgumentsNotValid = require("./subFunction.js").isArgumentsNotValid;
const find = require("./utility.js").find;
const insert = require("./utility.js").insert;
const getValue = require("./utility.js").getValue;
const update = require("./utility.js").update;

const printPattern = function(cmdArgus) {
  const pairs = slicing(cmdArgus);

  if (isArgumentsNotValid(cmdArgus)) {
    return "";
  }

  let defaultShape = [
    ["-s", "rectangle"],
    ["-p", "filled"],
    ["-d", "5,5"]
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
