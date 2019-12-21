const fs = require('fs').promises;
const path = require('path');
const { hullPainter } = require('./hullPainter');

const INPUT_FILE = path.join(__dirname, 'input.txt');

fs.readFile(INPUT_FILE, 'utf8')
  .then(input => input.trim().split(','))
  .then(memory => memory.map(Number))
  .then(memory => hullPainter(memory))
  .then(output => console.log('Painted panels at least once:', output));
