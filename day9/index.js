const fs = require('fs').promises;
const path = require('path');
const { intcodeComputer } = require('./intcodeComputer');

const INPUT_FILE = path.join(__dirname, 'input.txt');
const PROGRAM_INPUT = 1;

fs.readFile(INPUT_FILE, 'utf8')
  .then(input => input.trim().split(','))
  .then(memory => memory.map(Number))
  .then(memory => intcodeComputer(memory, PROGRAM_INPUT))
  .then(output => console.log('OUTPUT:', output));
