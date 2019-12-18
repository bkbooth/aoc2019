const { runTestCases } = require('../utils/runTestCases');
const { intcodeComputer } = require('./intcodeComputer');

runTestCases('day9:intcodeComputer', intcodeComputer, [
  {
    input: [109, 1, 204, -1, 1001, 100, 1, 100, 1008, 100, 16, 101, 1006, 101, 0, 99],
    expectedOutput: [109, 1, 204, -1, 1001, 100, 1, 100, 1008, 100, 16, 101, 1006, 101, 0, 99],
  },
  { input: [1102, 34915192, 34915192, 7, 4, 7, 99, 0], expectedOutput: 1219070632396864 },
  { input: [104, 1125899906842624, 99], expectedOutput: 1125899906842624 },
]);
