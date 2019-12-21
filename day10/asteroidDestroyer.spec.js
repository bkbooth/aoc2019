const { runTestCases } = require('../utils/runTestCases');
const { asteroidDestroyer } = require('./asteroidDestroyer');

const STARFIELD1 = [
  '.#....#####...#..',
  '##...##.#####..##',
  '##...#...#.#####.',
  '..#.....#...###..',
  '..#.#.....#....##',
];
const STATION1 = [8, 3];

const STARFIELD2 = [
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
];
const STATION2 = [11, 13];

runTestCases('day10:asteroidDestroyer', ([...inputs]) => asteroidDestroyer(...inputs), [
  { input: [STARFIELD1, STATION1, 1], expectedOutput: [8, 1] },
  { input: [STARFIELD1, STATION1, 9], expectedOutput: [15, 1] },
  { input: [STARFIELD1, STATION1, 18], expectedOutput: [4, 4] },
  { input: [STARFIELD1, STATION1, 27], expectedOutput: [5, 1] },
  { input: [STARFIELD1, STATION1, 36], expectedOutput: [14, 3] },

  { input: [STARFIELD2, STATION2, 1], expectedOutput: [11, 12] },
  { input: [STARFIELD2, STATION2, 2], expectedOutput: [12, 1] },
  { input: [STARFIELD2, STATION2, 10], expectedOutput: [12, 8] },
  { input: [STARFIELD2, STATION2, 199], expectedOutput: [9, 6] },
  { input: [STARFIELD2, STATION2, 200], expectedOutput: [8, 2] },
  { input: [STARFIELD2, STATION2, 201], expectedOutput: [10, 9] },
  { input: [STARFIELD2, STATION2, 299], expectedOutput: [11, 1] },
]);
