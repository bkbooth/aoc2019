const { runTestCases } = require('../utils/runTestCases');
const { moonSimulator, totalSystemEnergy } = require('./moonSimulator');

const MOON_POSITIONS = [
  [
    { x: -1, y: 0, z: 2 },
    { x: 2, y: -10, z: -7 },
    { x: 4, y: -8, z: 8 },
    { x: 3, y: 5, z: -1 },
  ],
  [
    { x: -8, y: -10, z: 0 },
    { x: 5, y: 5, z: 10 },
    { x: 2, y: -7, z: 3 },
    { x: 9, y: -8, z: -3 },
  ],
];

runTestCases('day12:moonSimulator', ([...inputs]) => moonSimulator(...inputs), [
  {
    input: [MOON_POSITIONS[0], 1],
    expectedOutput: [
      { pos: { x: 2, y: -1, z: 1 }, vel: { x: 3, y: -1, z: -1 } },
      { pos: { x: 3, y: -7, z: -4 }, vel: { x: 1, y: 3, z: 3 } },
      { pos: { x: 1, y: -7, z: 5 }, vel: { x: -3, y: 1, z: -3 } },
      { pos: { x: 2, y: 2, z: 0 }, vel: { x: -1, y: -3, z: 1 } },
    ],
  },
  {
    input: [MOON_POSITIONS[0], 2],
    expectedOutput: [
      { pos: { x: 5, y: -3, z: -1 }, vel: { x: 3, y: -2, z: -2 } },
      { pos: { x: 1, y: -2, z: 2 }, vel: { x: -2, y: 5, z: 6 } },
      { pos: { x: 1, y: -4, z: -1 }, vel: { x: 0, y: 3, z: -6 } },
      { pos: { x: 1, y: -4, z: 2 }, vel: { x: -1, y: -6, z: 2 } },
    ],
  },
  {
    input: [MOON_POSITIONS[0], 10],
    expectedOutput: [
      { pos: { x: 2, y: 1, z: -3 }, vel: { x: -3, y: -2, z: 1 } },
      { pos: { x: 1, y: -8, z: 0 }, vel: { x: -1, y: 1, z: 3 } },
      { pos: { x: 3, y: -6, z: 1 }, vel: { x: 3, y: 2, z: -3 } },
      { pos: { x: 2, y: 0, z: 4 }, vel: { x: 1, y: -1, z: -1 } },
    ],
  },
  {
    input: [MOON_POSITIONS[1], 10],
    expectedOutput: [
      { pos: { x: -9, y: -10, z: 1 }, vel: { x: -2, y: -2, z: -1 } },
      { pos: { x: 4, y: 10, z: 9 }, vel: { x: -3, y: 7, z: -2 } },
      { pos: { x: 8, y: -10, z: -3 }, vel: { x: 5, y: -1, z: -2 } },
      { pos: { x: 5, y: -10, z: 3 }, vel: { x: 0, y: -4, z: 5 } },
    ],
  },
  {
    input: [MOON_POSITIONS[1], 50],
    expectedOutput: [
      { pos: { x: -23, y: 4, z: 1 }, vel: { x: -7, y: -1, z: 2 } },
      { pos: { x: 20, y: -31, z: 13 }, vel: { x: 5, y: 3, z: 4 } },
      { pos: { x: -4, y: 6, z: 1 }, vel: { x: -1, y: 1, z: -3 } },
      { pos: { x: 15, y: 1, z: -5 }, vel: { x: 3, y: -3, z: -3 } },
    ],
  },
  {
    input: [MOON_POSITIONS[1], 100],
    expectedOutput: [
      { pos: { x: 8, y: -12, z: -9 }, vel: { x: -7, y: 3, z: 0 } },
      { pos: { x: 13, y: 16, z: -3 }, vel: { x: 3, y: -11, z: -5 } },
      { pos: { x: -29, y: -11, z: -1 }, vel: { x: -3, y: 7, z: 4 } },
      { pos: { x: 16, y: -13, z: 23 }, vel: { x: 7, y: 1, z: 1 } },
    ],
  },
]);

runTestCases('day12:totalSystemEnergy', totalSystemEnergy, [
  {
    input: [
      { pos: { x: 2, y: 1, z: -3 }, vel: { x: -3, y: -2, z: 1 } },
      { pos: { x: 1, y: -8, z: 0 }, vel: { x: -1, y: 1, z: 3 } },
      { pos: { x: 3, y: -6, z: 1 }, vel: { x: 3, y: 2, z: -3 } },
      { pos: { x: 2, y: 0, z: 4 }, vel: { x: 1, y: -1, z: -1 } },
    ],
    expectedOutput: 179,
  },
  {
    input: [
      { pos: { x: 8, y: -12, z: -9 }, vel: { x: -7, y: 3, z: 0 } },
      { pos: { x: 13, y: 16, z: -3 }, vel: { x: 3, y: -11, z: -5 } },
      { pos: { x: -29, y: -11, z: -1 }, vel: { x: -3, y: 7, z: 4 } },
      { pos: { x: 16, y: -13, z: 23 }, vel: { x: 7, y: 1, z: 1 } },
    ],
    expectedOutput: 1940,
  },
]);
