const { runTestCases } = require('../utils/runTestCases');
const { intcodeComputer, parseInstruction } = require('./intcodeComputer');

runTestCases('parseInstruction', parseInstruction, [
  {
    input: 1,
    expectedOutput: {
      opcode: 1,
      params: 3,
      paramModes: [0, 0, 0],
    },
  },
  {
    input: 2,
    expectedOutput: {
      opcode: 2,
      params: 3,
      paramModes: [0, 0, 0],
    },
  },
  {
    input: 99,
    expectedOutput: {
      opcode: 99,
      params: 0,
      paramModes: [],
    },
  },
  {
    input: 1002,
    expectedOutput: {
      opcode: 2,
      params: 3,
      paramModes: [0, 1, 0],
    },
  },
  {
    input: 1101,
    expectedOutput: {
      opcode: 1,
      params: 3,
      paramModes: [1, 1, 0],
    },
  },
  {
    input: 3,
    expectedOutput: {
      opcode: 3,
      params: 1,
      paramModes: [0],
    },
  },
  {
    input: 104,
    expectedOutput: {
      opcode: 4,
      params: 1,
      paramModes: [1],
    },
  },
]);

runTestCases('intcodeComputer', input => intcodeComputer(input, 1, 2, 3), [
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
  {
    input: [1002, 4, 3, 4, 33],
    expectedOutput: [1002, 4, 3, 4, 99],
  },
  {
    input: [1101, 100, -1, 4, 0],
    expectedOutput: [1101, 100, -1, 4, 99],
  },
  {
    input: [3, 0, 99],
    expectedOutput: [1, 0, 99],
  },
  {
    input: [104, 56, 99],
    expectedOutput: [104, 56, 99],
  },
]);
