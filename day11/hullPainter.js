const { intcodeComputerGenerator } = require('./intcodeComputer');

const BLACK = 0;
const WHITE = 1;
const LEFT = 0;
const RIGHT = 1;
const DIRECTIONS = [
  [0, -1],
  [1, 0],
  [0, 1],
  [-1, 0],
];

function hullPainter(program) {
  const computer = intcodeComputerGenerator(program);
  computer.next();

  let visited = [];
  let position = [0, 0];
  let direction = 0;
  let hasHalted = false;
  while (!hasHalted) {
    const previous = visited.find(([x, y]) => position[0] === x && position[1] === y);

    const {
      value: [colour, turn],
      done,
    } = computer.next(previous ? previous[2] : BLACK);
    if (done) hasHalted = true;

    // Paint colour
    if (previous) {
      previous[2] = colour;
    } else {
      visited.push([...position, colour]);
    }

    // Turn robot
    if (turn === LEFT) {
      direction--;
      if (direction < 0) direction = 3;
    } else {
      direction++;
      if (direction === DIRECTIONS.length) direction = 0;
    }

    // Move robot
    position[0] += DIRECTIONS[direction][0];
    position[1] += DIRECTIONS[direction][1];
  }

  return visited.length;
}

module.exports = { hullPainter };
