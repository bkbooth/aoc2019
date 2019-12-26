const fs = require('fs').promises;
const path = require('path');
const { moonSimulatorFindRepetition } = require('./moonSimulator');

const INPUT_FILE = path.join(__dirname, 'input.txt');
const LINE_REGEXP = /^<x=(?<x>-?\d+),\sy=(?<y>-?\d+),\sz=(?<z>-?\d+)>$/;

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
  .then(moons => moonSimulatorFindRepetition(moons))
  .then(stepsToRepetition => console.log('Steps until moon states repeated:', stepsToRepetition));
