const { runTestCases } = require('../utils/runTestCases');
const { getPermutations } = require('./getPermutations');

runTestCases('day7:getPermutations', getPermutations, [
  { input: [], expectedOutput: [] },
  { input: [1], expectedOutput: [[1]] },
  {
    input: [1, 2],
    expectedOutput: [
      [1, 2],
      [2, 1],
    ],
  },
  {
    input: [1, 2, 3],
    expectedOutput: [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ],
  },
  {
    input: ['c', 'a', 't'],
    expectedOutput: [
      ['c', 'a', 't'],
      ['c', 't', 'a'],
      ['a', 'c', 't'],
      ['a', 't', 'c'],
      ['t', 'c', 'a'],
      ['t', 'a', 'c'],
    ],
  },
]);
