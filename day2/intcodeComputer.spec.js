const { runTestCases } = require('../utils/runTestCases');
const { intcodeComputer } = require('./intcodeComputer');

runTestCases('intcodeComputer', intcodeComputer, [
  { input: [1, 0, 0, 0, 99], expectedOutput: [2, 0, 0, 0, 99] },
  { input: [2, 3, 0, 3, 99], expectedOutput: [2, 3, 0, 6, 99] },
  { input: [2, 4, 4, 5, 99, 0], expectedOutput: [2, 4, 4, 5, 99, 9801] },
  {
    input: [1, 1, 1, 4, 99, 5, 6, 0, 99],
    expectedOutput: [30, 1, 1, 4, 2, 5, 6, 0, 99],
  },
  {
    input: [1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50],
    expectedOutput: [3500, 9, 10, 70, 2, 3, 11, 0, 99, 30, 40, 50],
  },
]);
