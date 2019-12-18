const fs = require('fs').promises;
const path = require('path');
const { amplifier } = require('./amplifier');
const { getPermutations } = require('./getPermutations');

const INPUT_FILE = path.join(__dirname, 'input.txt');
const PHASE_SETTINGS = getPermutations([0, 1, 2, 3, 4]);

fs.readFile(INPUT_FILE, 'utf8')
  .then(input => input.split(','))
  .then(memory => memory.map(Number))
  .then(memory => {
    let maxThrusterSignal = 0;
    PHASE_SETTINGS.forEach(phaseSettings => {
      const thrusterSignal = amplifier(memory, ...phaseSettings);
      if (thrusterSignal > maxThrusterSignal) maxThrusterSignal = thrusterSignal;
    });
    console.log('Max thruster signal:', maxThrusterSignal);
  });
