const assert = require('assert').strict;
const { colourIt } = require('./colourIt');

function runTestCases(label, runner, testCases) {
  console.log(colourIt('blue', '»'), `Testing ${label}...`);
  let passed = 0;

  testCases.forEach(({ input, expectedOutput }) => {
    const output = runner(input);
    try {
      assert.deepStrictEqual(output, expectedOutput);
      passed++;
    } catch (_error) {
      console.error(
        colourIt('red', '✗'),
        `Expected ${format(expectedOutput)}, got ${format(output)}, for input ${format(input)}`
      );
    }
  });

  const messages = [`of ${testCases.length} ${label} test cases.`];
  if (passed !== 0) messages.unshift(colourIt('green', '✓'), `Passed ${passed}`);
  const failed = testCases.length - passed;
  if (failed) messages.unshift(colourIt('red', '✗'), `Failed ${failed}${passed ? ',' : ''}`);
  console.log(...messages);
}

function format(value) {
  if (Array.isArray(value)) {
    return `[${value.map(format).join(',')}]`;
  }
  if (value != null && typeof value === 'object') {
    return `{ ${Object.keys(value)
      .filter(key => value.hasOwnProperty(key))
      .map(key => `${key}: ${format(value[key])}`)
      .join(', ')} }`;
  }
  return value;
}

module.exports = { runTestCases };
