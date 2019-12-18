const { intcodeComputer, intcodeComputerGenerator } = require('./intcodeComputer');

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
  const amplifiers = phaseSettings.map(phaseSetting => {
    const amplifier = intcodeComputerGenerator(program, phaseSetting);
    amplifier.next(); // first pass, can't pass input value
    return amplifier;
  });

  let amplifierInput = INITIAL_AMPLIFIER_INPUT;
  let executingAmplifier = 0;
  let hasHalted = false;
  while (!hasHalted) {
    const { value, done } = amplifiers[executingAmplifier].next(amplifierInput);
    amplifierInput = value;
    if (done && executingAmplifier === amplifiers.length - 1) {
      hasHalted = true;
    } else {
      executingAmplifier++;
      if (executingAmplifier === amplifiers.length) executingAmplifier = 0;
    }
  }

  return amplifierInput;
}

module.exports = { amplifier, amplifierWithFeedback };
