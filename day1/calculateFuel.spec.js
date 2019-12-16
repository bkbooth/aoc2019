const calculateFuel = require("./calculateFuel");

const testCases = [
  { input: 12, expectedOutput: 2 },
  { input: 14, expectedOutput: 2 },
  { input: 1969, expectedOutput: 654 },
  { input: 100756, expectedOutput: 33583 },
  { input: 0, expectedOutput: 0 }
];
let passed = 0;

testCases.forEach(({ input, expectedOutput }) => {
  const output = calculateFuel(input);
  if (output !== expectedOutput) {
    console.error(
      `Expected ${expectedOutput} for input ${input}, got ${output}`
    );
  } else {
    passed++;
  }
});

console.log(`Passed ${passed}/${testCases.length} test cases.`);
