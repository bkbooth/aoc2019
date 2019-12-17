const { runTestCases } = require("../utils/runTestCases");
const {
  intersectingDistance,
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
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
      [5, 0],
      [6, 0],
      [7, 0],
      [8, 0],
      [8, 1],
      [8, 2],
      [8, 3],
      [8, 4],
      [8, 5],
      [7, 5],
      [6, 5],
      [5, 5],
      [4, 5],
      [3, 5],
      [3, 4],
      [3, 3],
      [3, 2]
    ]
  },
  {
    input: ["U7", "R6", "D4", "L4"],
    expectedOutput: [
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      [0, 5],
      [0, 6],
      [0, 7],
      [1, 7],
      [2, 7],
      [3, 7],
      [4, 7],
      [5, 7],
      [6, 7],
      [6, 6],
      [6, 5],
      [6, 4],
      [6, 3],
      [5, 3],
      [4, 3],
      [3, 3],
      [2, 3]
    ]
  }
]);

runTestCases(
  "intersectingDistance",
  ([input1, input2]) => intersectingDistance(input1, input2),
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
