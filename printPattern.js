const printPattern = require('./src/lib.js').printPattern;

const commandArguments = process.argv.slice(2);

const main = function () {
  console.log(printPattern(commandArguments));
};

main();
