const { intcodeComputerGenerator } = require('./intcodeComputer');

const SCREEN_ROWS = 22;
const SCREEN_COLS = 37;
const RENDER_TILE_ID = {
  0: ' ', // empty
  1: '█', // wall
  2: '▒', // block
  3: '▬', // horizontal paddle
  4: '●', // ball
};
const JOYSTICK = {
  NEUTRAL: 0,
  LEFT: -1,
  RIGHT: 1,
};

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');
stdin.resume();

async function arcadeGame(program, quarters = 1) {
  program[0] = quarters;

  const computer = intcodeComputerGenerator(program);
  computer.next();

  let screen = [];
  let score = 0;
  let joystick = JOYSTICK.NEUTRAL;
  let boardComplete = false;

  stdin.on('data', key => {
    if (key === '\u0003') {
      process.exit();
    } else if (key === '\u001B\u005B\u0044') {
      joystick = JOYSTICK.LEFT;
    } else if (key === '\u001B\u005B\u0043') {
      joystick = JOYSTICK.RIGHT;
    } else if (key === '\u001B\u005B\u0041' || key === '\u001B\u005B\u0042') {
      joystick = JOYSTICK.NEUTRAL;
    }
  });

  let hasHalted = false;
  while (!hasHalted) {
    const {
      value: [x, y, data],
      done,
    } = computer.next(boardComplete ? joystick : undefined);
    if (done) {
      hasHalted = true;
    } else {
      joystick = JOYSTICK.NEUTRAL;
      if (x === -1 && y === 0) score = data;
      else screen = updateScreen(screen, { x, y, tileId: data });
    }

    if (!boardComplete && screen.length === 22 && screen[SCREEN_ROWS - 1][SCREEN_COLS - 1] === 1) {
      boardComplete = true;
    }

    if (boardComplete) {
      render(screen, score);
      await wait();
    }
  }
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

function render(screen, score) {
  console.log('\033c');
  for (let y = 0; y < screen.length; y++) {
    console.log(screen[y].map(tileId => RENDER_TILE_ID[tileId]).join(''));
  }
  console.log('Score:', score);
}

function wait(ms = 60) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = { arcadeGame };
