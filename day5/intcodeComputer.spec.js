const { runTestCases } = require('../utils/runTestCases');
const { intcodeComputer, parseInstruction } = require('./intcodeComputer');

runTestCases('day5:parseInstruction', parseInstruction, [
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
  {
    input: 5,
    expectedOutput: {
      opcode: 5,
      params: 2,
      paramModes: [0, 0],
    },
  },
  {
    input: 106,
    expectedOutput: {
      opcode: 6,
      params: 2,
      paramModes: [1, 0],
    },
  },
  {
    input: 7,
    expectedOutput: {
      opcode: 7,
      params: 3,
      paramModes: [0, 0, 0],
    },
  },
  {
    input: 1108,
    expectedOutput: {
      opcode: 8,
      params: 3,
      paramModes: [1, 1, 0],
    },
  },
]);

runTestCases('day5:intcodeComputer', intcodeComputer, [
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
    input: [104, 56, 99],
    expectedOutput: [104, 56, 99],
  },
]);

runTestCases(
  'day5:intcodeComputer with inputs',
  ([memory, inputs]) => intcodeComputer(memory, ...inputs),
  [
    {
      input: [[3, 0, 99], [1]],
      expectedOutput: [1, 0, 99],
    },
    {
      input: [[3, 9, 8, 9, 10, 9, 4, 9, 99, -1, 8], [1]],
      expectedOutput: [3, 9, 8, 9, 10, 9, 4, 9, 99, 0, 8],
    },
    {
      input: [[3, 9, 8, 9, 10, 9, 4, 9, 99, -1, 8], [8]],
      expectedOutput: [3, 9, 8, 9, 10, 9, 4, 9, 99, 1, 8],
    },
    {
      input: [[3, 9, 7, 9, 10, 9, 4, 9, 99, -1, 8], [1]],
      expectedOutput: [3, 9, 7, 9, 10, 9, 4, 9, 99, 1, 8],
    },
    {
      input: [[3, 9, 7, 9, 10, 9, 4, 9, 99, -1, 8], [9]],
      expectedOutput: [3, 9, 7, 9, 10, 9, 4, 9, 99, 0, 8],
    },
    {
      input: [[3, 3, 1108, -1, 8, 3, 4, 3, 99], [1]],
      expectedOutput: [3, 3, 1108, 0, 8, 3, 4, 3, 99],
    },
    {
      input: [[3, 3, 1108, -1, 8, 3, 4, 3, 99], [8]],
      expectedOutput: [3, 3, 1108, 1, 8, 3, 4, 3, 99],
    },
    {
      input: [[3, 3, 1107, -1, 8, 3, 4, 3, 99], [1]],
      expectedOutput: [3, 3, 1107, 1, 8, 3, 4, 3, 99],
    },
    {
      input: [[3, 3, 1107, -1, 8, 3, 4, 3, 99], [9]],
      expectedOutput: [3, 3, 1107, 0, 8, 3, 4, 3, 99],
    },
    {
      input: [[3, 12, 6, 12, 15, 1, 13, 14, 13, 4, 13, 99, -1, 0, 1, 9], [0]],
      expectedOutput: [3, 12, 6, 12, 15, 1, 13, 14, 13, 4, 13, 99, 0, 0, 1, 9],
    },
    {
      input: [[3, 12, 6, 12, 15, 1, 13, 14, 13, 4, 13, 99, -1, 0, 1, 9], [2]],
      expectedOutput: [3, 12, 6, 12, 15, 1, 13, 14, 13, 4, 13, 99, 2, 1, 1, 9],
    },
    {
      input: [[3, 3, 1105, -1, 9, 1101, 0, 0, 12, 4, 12, 99, 1], [0]],
      expectedOutput: [3, 3, 1105, 0, 9, 1101, 0, 0, 12, 4, 12, 99, 0],
    },
    {
      input: [[3, 3, 1105, -1, 9, 1101, 0, 0, 12, 4, 12, 99, 1], [2]],
      expectedOutput: [3, 3, 1105, 2, 9, 1101, 0, 0, 12, 4, 12, 99, 1],
    },
  ]
);
