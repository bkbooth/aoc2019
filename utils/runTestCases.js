const assert = require("assert").strict;

function runTestCases(label, runner, testCases) {
  console.log(`Testing ${label}...`);
  let passed = 0;

  testCases.forEach(({ input, expectedOutput }) => {
    const output = runner(input);
    try {
      assert.deepStrictEqual(output, expectedOutput);
      passed++;
    } catch (_error) {
      console.error(
        `Expected ${format(expectedOutput)}, got ${format(
          output
        )}, for input ${format(input)}`
      );
    }
  });

  console.log(`Passed ${passed}/${testCases.length} ${label} test cases.`);
}

function format(value) {
  if (Array.isArray(value)) {
    return `[${value.map(format).join(",")}]`;
  }
  return value;
}

module.exports = { runTestCases };
