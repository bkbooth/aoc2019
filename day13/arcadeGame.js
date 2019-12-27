const { intcodeComputerGenerator } = require('./intcodeComputer');

const RENDER_TILE_ID = {
  0: ' ', // empty
  1: '█', // wall
  2: '▒', // block
  3: '▬', // horizontal paddle
  4: '●', // ball
};

async function arcadeGame(program) {
  const computer = intcodeComputerGenerator(program);
  computer.next();

  let screen = [];
  let hasHalted = false;
  while (!hasHalted) {
    const {
      value: [x, y, tileId],
      done,
    } = computer.next();
    if (done) hasHalted = true;
    else screen = updateScreen(screen, { x, y, tileId });
  }
  render(screen);
}

function updateScreen(lastScreen, { x, y, tileId }) {
  let maxY = Math.max(lastScreen.length, y + 1);
  let maxX = lastScreen.length ? Math.max(lastScreen[0].length, x + 1) : x + 1;

  return Array.from({ length: maxY }).map((_, rowIndex) => {
    let row = Array.from({ length: maxX }).fill(0);
    if (rowIndex < lastScreen.length) {
      // copy row from last screen
      lastScreen[rowIndex].forEach((pixel, colIndex) => {
        row[colIndex] = pixel;
      });
    }
    if (rowIndex === y) {
      // set the new pixel
      row[x] = tileId;
    }
    return row;
  });
}

function render(screen) {
  let blockTiles = 0;
  for (let y = 0; y < screen.length; y++) {
    console.log(
      screen[y]
        .map(tileId => {
          if (tileId === 2) blockTiles++;
          return RENDER_TILE_ID[tileId];
        })
        .join('')
    );
  }
  console.log('Number of block tiles:', blockTiles);
}

module.exports = { arcadeGame };
