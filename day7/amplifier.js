const { intcodeComputer } = require('./intcodeComputer');

const INITIAL_AMPLIFIER_INPUT = 0;

function amplifier(program, ...phaseSettings) {
  const amplifiers = phaseSettings.length;
  let amplifierInput = INITIAL_AMPLIFIER_INPUT;
  for (let i = 0; i < amplifiers; i++) {
    amplifierInput = intcodeComputer(program, phaseSettings[i], amplifierInput);
  }

  return amplifierInput;
}

function amplifierWithFeedback(program, ...phaseSettings) {
  return 0;
}

module.exports = { amplifier, amplifierWithFeedback };
