const fs = require('fs').promises;
const path = require('path');
const { arcadeGame } = require('./arcadeGame');

const INPUT_FILE = path.join(__dirname, 'input.txt');

fs.readFile(INPUT_FILE, 'utf8')
  .then(input => input.trim().split(','))
  .then(memory => memory.map(Number))
  .then(memory => arcadeGame(memory));
