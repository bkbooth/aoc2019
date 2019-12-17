const fs = require('fs').promises;
const path = require('path');
const { orbitCounter } = require('./orbitCounter');

const INPUT_FILE = path.join(__dirname, 'input.txt');

fs.readFile(INPUT_FILE, 'utf8')
  .then(input => input.split('\n'))
  .then(map => map.filter(node => node !== ''))
  .then(map => orbitCounter(map))
  .then(orbits => console.log('Orbit count checksum:', orbits));
