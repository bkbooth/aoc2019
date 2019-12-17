// reference: https://stackoverflow.com/a/41407246
const COLOUR_CODES = {
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
};

const RESET_CODE = '\x1b[0m';

function colourIt(colour, text) {
  const colourCode = COLOUR_CODES[colour] || '';
  return colourCode + text + RESET_CODE;
}

module.exports = { colourIt };
