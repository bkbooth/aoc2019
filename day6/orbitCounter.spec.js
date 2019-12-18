const { runTestCases } = require('../utils/runTestCases');
const { minOrbitalTransfers, orbitCounter } = require('./orbitCounter');

runTestCases('day6:orbitCounter', orbitCounter, [
  {
    input: ['COM)B', 'B)C', 'C)D', 'D)E', 'E)F', 'B)G', 'G)H', 'D)I', 'E)J', 'J)K', 'K)L'],
    expectedOutput: 42,
  },
]);

runTestCases('day6:minOrbitalTransfers', ([map, from, to]) => minOrbitalTransfers(map, from, to), [
  {
    input: [
      [
        'COM)B',
        'B)C',
        'C)D',
        'D)E',
        'E)F',
        'B)G',
        'G)H',
        'D)I',
        'E)J',
        'J)K',
        'K)L',
        'K)YOU',
        'I)SAN',
      ],
      'YOU',
      'SAN',
    ],
    expectedOutput: 4,
  },
]);
