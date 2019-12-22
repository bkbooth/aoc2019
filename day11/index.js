const fs = require('fs').promises;
const path = require('path');
const { hullPainter } = require('./hullPainter');

const INPUT_FILE = path.join(__dirname, 'input.txt');
const WHITE = 1;

fs.readFile(INPUT_FILE, 'utf8')
  .then(input => input.trim().split(','))
  .then(memory => memory.map(Number))
  .then(memory => hullPainter(memory))
  // .then(painted => console.log('Painted panels at least once:', painted.length));
  .then(painted => {
    console.log(render(painted));
  });

function render(painted) {
  let minX = Number.POSITIVE_INFINITY;
  let minY = Number.POSITIVE_INFINITY;
  let maxX = Number.NEGATIVE_INFINITY;
  let maxY = Number.NEGATIVE_INFINITY;
  painted.forEach(([x, y]) => {
    if (x < minX) minX = x;
    else if (x > maxX) maxX = x;

    if (y < minY) minY = y;
    else if (y > maxY) maxY = y;
  });

  let output = [];
  for (let y = minY; y <= maxY; y++) {
    let row = [];
    for (let x = minX; x <= maxX; x++) {
      let panel = painted.find(panel => panel[0] === x && panel[1] === y);
      row[x] = panel && panel[2] === WHITE ? '█' : ' ';
    }
    row.push('\n');
    output.push(row.join(''));
  }
  return output.join('');
}
