const fs = require('fs').promises;
const path = require('path');
const { minOrbitalTransfers, orbitCounter } = require('./orbitCounter');

const INPUT_FILE = path.join(__dirname, 'input.txt');
const TRANSFER_FROM = 'YOU';
const TRANSFER_TO = 'SAN';

fs.readFile(INPUT_FILE, 'utf8')
  .then(input => input.split('\n'))
  .then(map => map.filter(node => node !== ''))
  .then(map => [orbitCounter(map), minOrbitalTransfers(map, TRANSFER_FROM, TRANSFER_TO)])
  .then(([orbits, minTransfers]) => {
    console.log('Orbit count checksum:', orbits);
    console.log('Min orbital transfers:', minTransfers);
  });
