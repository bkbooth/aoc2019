const { runTestCases } = require("../utils/runTestCases");
const {
  intersectingDistanceByClosest,
  intersectingDistanceBySteps,
  parseCommand,
  pointsOnPath
} = require("./intersectingDistance");

runTestCases("parseCommand", parseCommand, [
  {
    input: "R75",
    expectedOutput: { direction: "R", distance: 75 }
  },
  {
    input: "D30",
    expectedOutput: { direction: "D", distance: 30 }
  },
  {
    input: "R83",
    expectedOutput: { direction: "R", distance: 83 }
  },
  {
    input: "U83",
    expectedOutput: { direction: "U", distance: 83 }
  },
  {
    input: "L12",
    expectedOutput: { direction: "L", distance: 12 }
  },
  {
    input: "D49",
    expectedOutput: { direction: "D", distance: 49 }
  },
  {
    input: "R71",
    expectedOutput: { direction: "R", distance: 71 }
  },
  {
    input: "U7",
    expectedOutput: { direction: "U", distance: 7 }
  },
  {
    input: "L72",
    expectedOutput: { direction: "L", distance: 72 }
  }
]);

runTestCases("pointsOnPath", pointsOnPath, [
  {
    input: ["R8", "U5", "L5", "D3"],
    expectedOutput: [
      [1, 0, 1],
      [2, 0, 2],
      [3, 0, 3],
      [4, 0, 4],
      [5, 0, 5],
      [6, 0, 6],
      [7, 0, 7],
      [8, 0, 8],
      [8, 1, 9],
      [8, 2, 10],
      [8, 3, 11],
      [8, 4, 12],
      [8, 5, 13],
      [7, 5, 14],
      [6, 5, 15],
      [5, 5, 16],
      [4, 5, 17],
      [3, 5, 18],
      [3, 4, 19],
      [3, 3, 20],
      [3, 2, 21]
    ]
  },
  {
    input: ["U7", "R6", "D4", "L4"],
    expectedOutput: [
      [0, 1, 1],
      [0, 2, 2],
      [0, 3, 3],
      [0, 4, 4],
      [0, 5, 5],
      [0, 6, 6],
      [0, 7, 7],
      [1, 7, 8],
      [2, 7, 9],
      [3, 7, 10],
      [4, 7, 11],
      [5, 7, 12],
      [6, 7, 13],
      [6, 6, 14],
      [6, 5, 15],
      [6, 4, 16],
      [6, 3, 17],
      [5, 3, 18],
      [4, 3, 19],
      [3, 3, 20],
      [2, 3, 21]
    ]
  }
]);

runTestCases(
  "intersectingDistanceByClosest",
  ([input1, input2]) => intersectingDistanceByClosest(input1, input2),
  [
    {
      input: [
        ["R8", "U5", "L5", "D3"],
        ["U7", "R6", "D4", "L4"]
      ],
      expectedOutput: 6
    },
    {
      input: [
        ["R75", "D30", "R83", "U83", "L12", "D49", "R71", "U7", "L72"],
        ["U62", "R66", "U55", "R34", "D71", "R55", "D58", "R83"]
      ],
      expectedOutput: 159
    },
    {
      input: [
        [
          "R98",
          "U47",
          "R26",
          "D63",
          "R33",
          "U87",
          "L62",
          "D20",
          "R33",
          "U53",
          "R51"
        ],
        ["U98", "R91", "D20", "R16", "D67", "R40", "U7", "R15", "U6", "R7"]
      ],
      expectedOutput: 135
    }
  ]
);

runTestCases(
  "intersectingDistanceBySteps",
  ([input1, input2]) => intersectingDistanceBySteps(input1, input2),
  [
    {
      input: [
        ["R8", "U5", "L5", "D3"],
        ["U7", "R6", "D4", "L4"]
      ],
      expectedOutput: 30
    },
    {
      input: [
        ["R75", "D30", "R83", "U83", "L12", "D49", "R71", "U7", "L72"],
        ["U62", "R66", "U55", "R34", "D71", "R55", "D58", "R83"]
      ],
      expectedOutput: 610
    },
    {
      input: [
        [
          "R98",
          "U47",
          "R26",
          "D63",
          "R33",
          "U87",
          "L62",
          "D20",
          "R33",
          "U53",
          "R51"
        ],
        ["U98", "R91", "D20", "R16", "D67", "R40", "U7", "R15", "U6", "R7"]
      ],
      expectedOutput: 410
    }
  ]
);
