const fs = require('fs').promises;
const path = require('path');
const { moonSimulator, totalSystemEnergy } = require('./moonSimulator');

const INPUT_FILE = path.join(__dirname, 'input.txt');
const LINE_REGEXP = /^<x=(?<x>-?\d+),\sy=(?<y>-?\d+),\sz=(?<z>-?\d+)>$/;
const NUMBER_OF_STEPS = 1000;

fs.readFile(INPUT_FILE, 'utf8')
  .then(input => input.trim().split('\n'))
  .then(lines => lines.map(line => LINE_REGEXP.exec(line).groups))
  .then(groups =>
    groups.map(({ x, y, z }) => ({
      x: Number(x),
      y: Number(y),
      z: Number(z),
    }))
  )
  .then(moons => moonSimulator(moons, NUMBER_OF_STEPS))
  .then(moons => totalSystemEnergy(moons))
  .then(totalEnergy => console.log('Total system energy after 1000 steps:', totalEnergy));
