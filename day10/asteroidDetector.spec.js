const { runTestCases } = require('../utils/runTestCases');
const { asteroidDetector, findAsteroids, isInSameLine } = require('./asteroidDetector');

runTestCases('day10:isInSameLine', ([...inputs]) => isInSameLine(...inputs), [
  {
    input: [
      [1, 0],
      [4, 0],
      [4, 2],
    ],
    expectedOutput: false,
  },
  {
    input: [
      [1, 0],
      [3, 2],
      [4, 3],
    ],
    expectedOutput: true,
  },
  {
    input: [
      [4, 4],
      [4, 2],
      [4, 0],
    ],
    expectedOutput: true,
  },
  {
    input: [
      [3, 4],
      [2, 2],
      [1, 0],
    ],
    expectedOutput: true,
  },
  {
    input: [
      [3, 4],
      [1, 2],
      [1, 0],
    ],
    expectedOutput: false,
  },
  {
    input: [
      [2, 2],
      [0, 2],
      [4, 2],
    ],
    expectedOutput: false,
  },
  {
    input: [
      [1, 0],
      [2, 2],
      [0, 2],
    ],
    expectedOutput: false,
  },
  {
    input: [
      [5, 8],
      [8, 8],
      [0, 8],
    ],
    expectedOutput: false,
  },
  {
    input: [
      [5, 8],
      [1, 9],
      [9, 7],
    ],
    expectedOutput: false,
  },
]);

const STARFIELDS = [
  ['.#..#', '.....', '#####', '....#', '...##'],
  [
    '......#.#.',
    '#..#.#....',
    '..#######.',
    '.#.#.###..',
    '.#..#.....',
    '..#....#.#',
    '#..#....#.',
    '.##.#..###',
    '##...#..#.',
    '.#....####',
  ],
  [
    '#.#...#.#.',
    '.###....#.',
    '.#....#...',
    '##.#.#.#.#',
    '....#.#.#.',
    '.##..###.#',
    '..#...##..',
    '..##....##',
    '......#...',
    '.####.###.',
  ],
  [
    '.#..#..###',
    '####.###.#',
    '....###.#.',
    '..###.##.#',
    '##.##.#.#.',
    '....###..#',
    '..#.#..#.#',
    '#..#.#.###',
    '.##...##.#',
    '.....#.#..',
  ],
  [
    '.#..##.###...#######',
    '##.############..##.',
    '.#.######.########.#',
    '.###.#######.####.#.',
    '#####.##.#.##.###.##',
    '..#####..#.#########',
    '####################',
    '#.####....###.#.#.##',
    '##.#################',
    '#####.##.###..####..',
    '..######..##.#######',
    '####.##.####...##..#',
    '.#####..#.######.###',
    '##...#.##########...',
    '#.##########.#######',
    '.####.#.###.###.#.##',
    '....##.##.###..#####',
    '.#.#.###########.###',
    '#.#.#.#####.####.###',
    '###.##.####.##.#..##',
  ],
];

runTestCases('day10:asteroidDetector', asteroidDetector, [
  { input: STARFIELDS[0], expectedOutput: [3, 4, 8] },
  {
    input: STARFIELDS[1],
    expectedOutput: [5, 8, 33],
  },
  {
    input: STARFIELDS[2],
    expectedOutput: [1, 2, 35],
  },
  {
    input: STARFIELDS[3],
    expectedOutput: [6, 3, 41],
  },
  {
    input: STARFIELDS[4],
    expectedOutput: [11, 13, 210],
  },
]);

runTestCases('day10:findAsteroids', findAsteroids, [
  {
    input: STARFIELDS[0],
    expectedOutput: [
      [1, 0],
      [4, 0],
      [0, 2],
      [1, 2],
      [2, 2],
      [3, 2],
      [4, 2],
      [4, 3],
      [3, 4],
      [4, 4],
    ],
  },
  {
    input: STARFIELDS[1],
    expectedOutput: [
      [6, 0],
      [8, 0],
      [0, 1],
      [3, 1],
      [5, 1],
      [2, 2],
      [3, 2],
      [4, 2],
      [5, 2],
      [6, 2],
      [7, 2],
      [8, 2],
      [1, 3],
      [3, 3],
      [5, 3],
      [6, 3],
      [7, 3],
      [1, 4],
      [4, 4],
      [2, 5],
      [7, 5],
      [9, 5],
      [0, 6],
      [3, 6],
      [8, 6],
      [1, 7],
      [2, 7],
      [4, 7],
      [7, 7],
      [8, 7],
      [9, 7],
      [0, 8],
      [1, 8],
      [5, 8],
      [8, 8],
      [1, 9],
      [6, 9],
      [7, 9],
      [8, 9],
      [9, 9],
    ],
  },
  {
    input: STARFIELDS[2],
    expectedOutput: [
      [0, 0],
      [2, 0],
      [6, 0],
      [8, 0],
      [1, 1],
      [2, 1],
      [3, 1],
      [8, 1],
      [1, 2],
      [6, 2],
      [0, 3],
      [1, 3],
      [3, 3],
      [5, 3],
      [7, 3],
      [9, 3],
      [4, 4],
      [6, 4],
      [8, 4],
      [1, 5],
      [2, 5],
      [5, 5],
      [6, 5],
      [7, 5],
      [9, 5],
      [2, 6],
      [6, 6],
      [7, 6],
      [2, 7],
      [3, 7],
      [8, 7],
      [9, 7],
      [6, 8],
      [1, 9],
      [2, 9],
      [3, 9],
      [4, 9],
      [6, 9],
      [7, 9],
      [8, 9],
    ],
  },
  {
    input: STARFIELDS[3],
    expectedOutput: [
      [1, 0],
      [4, 0],
      [7, 0],
      [8, 0],
      [9, 0],
      [0, 1],
      [1, 1],
      [2, 1],
      [3, 1],
      [5, 1],
      [6, 1],
      [7, 1],
      [9, 1],
      [4, 2],
      [5, 2],
      [6, 2],
      [8, 2],
      [2, 3],
      [3, 3],
      [4, 3],
      [6, 3],
      [7, 3],
      [9, 3],
      [0, 4],
      [1, 4],
      [3, 4],
      [4, 4],
      [6, 4],
      [8, 4],
      [4, 5],
      [5, 5],
      [6, 5],
      [9, 5],
      [2, 6],
      [4, 6],
      [7, 6],
      [9, 6],
      [0, 7],
      [3, 7],
      [5, 7],
      [7, 7],
      [8, 7],
      [9, 7],
      [1, 8],
      [2, 8],
      [6, 8],
      [7, 8],
      [9, 8],
      [5, 9],
      [7, 9],
    ],
  },
  {
    input: STARFIELDS[4],
    expectedOutput: [
      [1, 0],
      [4, 0],
      [5, 0],
      [7, 0],
      [8, 0],
      [9, 0],
      [13, 0],
      [14, 0],
      [15, 0],
      [16, 0],
      [17, 0],
      [18, 0],
      [19, 0],
      [0, 1],
      [1, 1],
      [3, 1],
      [4, 1],
      [5, 1],
      [6, 1],
      [7, 1],
      [8, 1],
      [9, 1],
      [10, 1],
      [11, 1],
      [12, 1],
      [13, 1],
      [14, 1],
      [17, 1],
      [18, 1],
      [1, 2],
      [3, 2],
      [4, 2],
      [5, 2],
      [6, 2],
      [7, 2],
      [8, 2],
      [10, 2],
      [11, 2],
      [12, 2],
      [13, 2],
      [14, 2],
      [15, 2],
      [16, 2],
      [17, 2],
      [19, 2],
      [1, 3],
      [2, 3],
      [3, 3],
      [5, 3],
      [6, 3],
      [7, 3],
      [8, 3],
      [9, 3],
      [10, 3],
      [11, 3],
      [13, 3],
      [14, 3],
      [15, 3],
      [16, 3],
      [18, 3],
      [0, 4],
      [1, 4],
      [2, 4],
      [3, 4],
      [4, 4],
      [6, 4],
      [7, 4],
      [9, 4],
      [11, 4],
      [12, 4],
      [14, 4],
      [15, 4],
      [16, 4],
      [18, 4],
      [19, 4],
      [2, 5],
      [3, 5],
      [4, 5],
      [5, 5],
      [6, 5],
      [9, 5],
      [11, 5],
      [12, 5],
      [13, 5],
      [14, 5],
      [15, 5],
      [16, 5],
      [17, 5],
      [18, 5],
      [19, 5],
      [0, 6],
      [1, 6],
      [2, 6],
      [3, 6],
      [4, 6],
      [5, 6],
      [6, 6],
      [7, 6],
      [8, 6],
      [9, 6],
      [10, 6],
      [11, 6],
      [12, 6],
      [13, 6],
      [14, 6],
      [15, 6],
      [16, 6],
      [17, 6],
      [18, 6],
      [19, 6],
      [0, 7],
      [2, 7],
      [3, 7],
      [4, 7],
      [5, 7],
      [10, 7],
      [11, 7],
      [12, 7],
      [14, 7],
      [16, 7],
      [18, 7],
      [19, 7],
      [0, 8],
      [1, 8],
      [3, 8],
      [4, 8],
      [5, 8],
      [6, 8],
      [7, 8],
      [8, 8],
      [9, 8],
      [10, 8],
      [11, 8],
      [12, 8],
      [13, 8],
      [14, 8],
      [15, 8],
      [16, 8],
      [17, 8],
      [18, 8],
      [19, 8],
      [0, 9],
      [1, 9],
      [2, 9],
      [3, 9],
      [4, 9],
      [6, 9],
      [7, 9],
      [9, 9],
      [10, 9],
      [11, 9],
      [14, 9],
      [15, 9],
      [16, 9],
      [17, 9],
      [2, 10],
      [3, 10],
      [4, 10],
      [5, 10],
      [6, 10],
      [7, 10],
      [10, 10],
      [11, 10],
      [13, 10],
      [14, 10],
      [15, 10],
      [16, 10],
      [17, 10],
      [18, 10],
      [19, 10],
      [0, 11],
      [1, 11],
      [2, 11],
      [3, 11],
      [5, 11],
      [6, 11],
      [8, 11],
      [9, 11],
      [10, 11],
      [11, 11],
      [15, 11],
      [16, 11],
      [19, 11],
      [1, 12],
      [2, 12],
      [3, 12],
      [4, 12],
      [5, 12],
      [8, 12],
      [10, 12],
      [11, 12],
      [12, 12],
      [13, 12],
      [14, 12],
      [15, 12],
      [17, 12],
      [18, 12],
      [19, 12],
      [0, 13],
      [1, 13],
      [5, 13],
      [7, 13],
      [8, 13],
      [9, 13],
      [10, 13],
      [11, 13],
      [12, 13],
      [13, 13],
      [14, 13],
      [15, 13],
      [16, 13],
      [0, 14],
      [2, 14],
      [3, 14],
      [4, 14],
      [5, 14],
      [6, 14],
      [7, 14],
      [8, 14],
      [9, 14],
      [10, 14],
      [11, 14],
      [13, 14],
      [14, 14],
      [15, 14],
      [16, 14],
      [17, 14],
      [18, 14],
      [19, 14],
      [1, 15],
      [2, 15],
      [3, 15],
      [4, 15],
      [6, 15],
      [8, 15],
      [9, 15],
      [10, 15],
      [12, 15],
      [13, 15],
      [14, 15],
      [16, 15],
      [18, 15],
      [19, 15],
      [4, 16],
      [5, 16],
      [7, 16],
      [8, 16],
      [10, 16],
      [11, 16],
      [12, 16],
      [15, 16],
      [16, 16],
      [17, 16],
      [18, 16],
      [19, 16],
      [1, 17],
      [3, 17],
      [5, 17],
      [6, 17],
      [7, 17],
      [8, 17],
      [9, 17],
      [10, 17],
      [11, 17],
      [12, 17],
      [13, 17],
      [14, 17],
      [15, 17],
      [17, 17],
      [18, 17],
      [19, 17],
      [0, 18],
      [2, 18],
      [4, 18],
      [6, 18],
      [7, 18],
      [8, 18],
      [9, 18],
      [10, 18],
      [12, 18],
      [13, 18],
      [14, 18],
      [15, 18],
      [17, 18],
      [18, 18],
      [19, 18],
      [0, 19],
      [1, 19],
      [2, 19],
      [4, 19],
      [5, 19],
      [7, 19],
      [8, 19],
      [9, 19],
      [10, 19],
      [12, 19],
      [13, 19],
      [15, 19],
      [18, 19],
      [19, 19],
    ],
  },
]);
