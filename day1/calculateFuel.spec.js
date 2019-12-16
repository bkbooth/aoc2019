const { calculateFuel, calculateFuelRecursive } = require("./calculateFuel");

runTestCases(calculateFuel, [
  { input: 12, expectedOutput: 2 },
  { input: 14, expectedOutput: 2 },
  { input: 1969, expectedOutput: 654 },
  { input: 100756, expectedOutput: 33583 },
  { input: 0, expectedOutput: 0 }
]);

runTestCases(calculateFuelRecursive, [
  { input: 14, expectedOutput: 2 },
  { input: 1969, expectedOutput: 966 },
  { input: 100756, expectedOutput: 50346 },
  { input: 0, expectedOutput: 0 }
]);

function runTestCases(method, testCases) {
  console.log(`Testing ${method.name}...`);
  let passed = 0;

  testCases.forEach(({ input, expectedOutput }) => {
    const output = method(input);
    if (output !== expectedOutput) {
      console.error(
        `Expected ${expectedOutput} for input ${input}, got ${output}`
      );
    } else {
      passed++;
    }
  });

  console.log(
    `Passed ${passed}/${testCases.length} ${method.name} test cases.`
  );
}
