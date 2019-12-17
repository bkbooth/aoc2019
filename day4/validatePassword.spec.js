const { runTestCases } = require("../utils/runTestCases");
const { validatePassword } = require("./validatePassword");

runTestCases("validatePassword", validatePassword, [
  { input: "", expectedOutput: false },
  { input: "1234", expectedOutput: false },
  { input: "1234567", expectedOutput: false },
  { input: "abcdef", expectedOutput: false },
  { input: "122345", expectedOutput: true },
  { input: "111123", expectedOutput: true },
  { input: "135679", expectedOutput: false },
  { input: "111111", expectedOutput: true },
  { input: "223450", expectedOutput: false },
  { input: "123789", expectedOutput: false }
]);
