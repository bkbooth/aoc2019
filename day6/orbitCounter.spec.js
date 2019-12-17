const { runTestCases } = require('../utils/runTestCases');
const { orbitCounter } = require('./orbitCounter');

runTestCases('day6:orbitCounter', orbitCounter, [
  {
    input: ['COM)B', 'B)C', 'C)D', 'D)E', 'E)F', 'B)G', 'G)H', 'D)I', 'E)J', 'J)K', 'K)L'],
    expectedOutput: 42,
  },
]);
