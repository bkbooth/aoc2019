const { runTestCases } = require("../utils/runTestCases");
const { calculateFuel, calculateFuelRecursive } = require("./calculateFuel");

runTestCases("calculateFuel", calculateFuel, [
  { input: 12, expectedOutput: 2 },
  { input: 14, expectedOutput: 2 },
  { input: 1969, expectedOutput: 654 },
  { input: 100756, expectedOutput: 33583 },
  { input: 0, expectedOutput: 0 }
]);

runTestCases("calculateFuelRecursive", calculateFuelRecursive, [
  { input: 14, expectedOutput: 2 },
  { input: 1969, expectedOutput: 966 },
  { input: 100756, expectedOutput: 50346 },
  { input: 0, expectedOutput: 0 }
]);
