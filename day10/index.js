const fs = require('fs').promises;
const path = require('path');
const { asteroidDestroyer } = require('./asteroidDestroyer');
const { asteroidDetector } = require('./asteroidDetector');

const INPUT_FILE = path.join(__dirname, 'input.txt');
const HOW_MANY_TO_DESTROY = 200;

let starfield;

fs.readFile(INPUT_FILE, 'utf8')
  .then(input => input.trim().split('\n'))
  .then(input => {
    starfield = input;
    return input;
  })
  .then(asteroidDetector)
  .then(([x, y, asteroids]) => {
    console.log(`Best location at: ${x},${y}. Can monitor ${asteroids} asteroids`);
    return [x, y];
  })
  .then(station => asteroidDestroyer(starfield, station, HOW_MANY_TO_DESTROY))
  .then(([x, y]) =>
    console.log(
      `The ${HOW_MANY_TO_DESTROY}th asteroid vaporized is at ${x},${y}. ${x} * 100 + ${y} = ${x *
        100 +
        y}`
    )
  );
