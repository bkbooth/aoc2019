const fs = require('fs').promises;
const path = require('path');
const { asteroidDetector } = require('./asteroidDetector');

const INPUT_FILE = path.join(__dirname, 'input.txt');

fs.readFile(INPUT_FILE, 'utf8')
  .then(input => input.trim().split('\n'))
  .then(asteroidDetector)
  .then(([x, y, asteroids]) =>
    console.log(`Best location at: ${x},${y}. Can monitor ${asteroids} asteroids`)
  );
