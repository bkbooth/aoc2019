const fs = require('fs').promises;
const path = require('path');
const { amplifierWithFeedback } = require('./amplifier');
const { getPermutations } = require('./getPermutations');

const INPUT_FILE = path.join(__dirname, 'input.txt');
const PHASE_SETTINGS = getPermutations([5, 6, 7, 8, 9]);

fs.readFile(INPUT_FILE, 'utf8')
  .then(input => input.split(','))
  .then(memory => memory.map(Number))
  .then(memory => {
    let maxThrusterSignal = 0;
    PHASE_SETTINGS.forEach(phaseSettings => {
      const thrusterSignal = amplifierWithFeedback(memory, ...phaseSettings);
      if (thrusterSignal > maxThrusterSignal) maxThrusterSignal = thrusterSignal;
    });
    console.log('Max thruster signal:', maxThrusterSignal);
  });
