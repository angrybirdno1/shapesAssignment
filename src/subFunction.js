const rectanglefilled = require("./rectangleLib.js").rectanglefilled;
const rectanglehollow = require("./rectangleLib.js").rectanglehollow;
const rectanglealternating = require("./rectangleLib.js").rectanglealternating;
const rectangleinterlaced = require("./rectangleLib.js").rectangleinterlaced;
const rectangleangled = require("./rectangleLib.js").rectangleangled;

const trianglefilled = require("./triangleLib.js").trianglefilled;
const trianglehollow = require("./triangleLib.js").trianglehollow;
const trianglealternating = require("./triangleLib.js").trianglealternating;
const triangleinterlaced = require("./triangleLib.js").triangleinterlaced;
const triangleangled = require("./triangleLib.js").triangleangled;

const diamondfilled = require("./diamondLib.js").diamondfilled;
const diamondhollow = require("./diamondLib.js").diamondhollow;
const diamondalternating = require("./diamondLib.js").diamondalternating;
const diamondinterlaced = require("./diamondLib.js").diamondinterlaced;
const diamondangled = require("./diamondLib.js").diamondangled;

const find = require("./utility.js").find;
const insert = require("./utility.js").insert;
const getValue = require("./utility.js").getValue;
const update = require("./utility.js").update;

const isArgumentIsAnInteger = function(argument) {
  return +argument > 0 && +argument % 1 == 0;
};

const isEveryPairValid = function(elementArray) {
  const options = ["-s", "-p"];
  const geometricFeatures = [
    "triangle",
    "rectangle",
    "diamond",
    "filled",
    "hollow",
    "alternating",
    "interlaced",
    "angled"
  ];
  if (elementArray[0] == "-d") {
    let diamensions = elementArray[1].split(",");
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

const isArgumentsNotValid = function(cmdArgus) {
  if (cmdArgus.length % 2 != 0) {
    return true;
  }
  const pairs = slicing(cmdArgus);
  return !pairs.every(isEveryPairValid);
};

const slicing = function(array) {
  const returnArray = [];
  for (index = 0; index < array.length; index += 2) {
    returnArray.push([array[index], array[index + 1]]);
  }
  return returnArray;
};

const printAccordingToOptions = function(orderedArgus) {
  const funcArrays = [
    ["rectanglefilled", rectanglefilled],
    ["rectanglehollow", rectanglehollow],
    ["rectanglealternating", rectanglealternating],
    ["rectangleinterlaced", rectangleinterlaced],
    ["rectangleangled", rectangleangled],
    ["trianglefilled", trianglefilled],
    ["trianglehollow", trianglehollow],
    ["trianglealternating", trianglealternating],
    ["triangleinterlaced", triangleinterlaced],
    ["triangleangled", triangleangled],
    ["diamondfilled", diamondfilled],
    ["diamondhollow", diamondhollow],
    ["diamondalternating", diamondalternating],
    ["diamondinterlaced", diamondinterlaced],
    ["diamondangled", diamondangled]
  ];
  const diamensions = orderedArgus[2].split(",");
  const action = getValue(funcArrays, orderedArgus[0] + orderedArgus[1]);
  return action(+diamensions[0], +diamensions[1]);
};

exports.slicing = slicing;
exports.printAccordingToOptions = printAccordingToOptions;
exports.isArgumentsNotValid = isArgumentsNotValid;
exports.isEveryPairValid = isEveryPairValid;
