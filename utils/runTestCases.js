const assert = require("assert").strict;

function runTestCases(method, testCases) {
  console.log(`Testing ${method.name}...`);
  let passed = 0;

  testCases.forEach(({ input, expectedOutput }) => {
    const output = method(input);
    try {
      assert.deepStrictEqual(output, expectedOutput);
      passed++;
    } catch (_error) {
      console.error(
        `Expected ${format(expectedOutput)} for input ${format(
          input
        )}, got ${format(output)}`
      );
    }
  });

  console.log(
    `Passed ${passed}/${testCases.length} ${method.name} test cases.`
  );
}

function format(value) {
  if (Array.isArray(value)) return `[${value.join(",")}]`;
  return value;
}

module.exports = { runTestCases };
