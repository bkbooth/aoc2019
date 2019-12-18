const fs = require('fs').promises;
const path = require('path');
const { buildLayers, decodeImage, renderImage } = require('./imageDecoder');

const INPUT_FILE = path.join(__dirname, 'input.txt');
const IMAGE_WIDTH = 25;
const IMAGE_HEIGHT = 6;

fs.readFile(INPUT_FILE, 'utf8')
  .then(input => input.trim())
  .then(pixels => {
    const layers = buildLayers(IMAGE_WIDTH, IMAGE_HEIGHT, pixels);
    const image = decodeImage(layers);
    console.log(renderImage(IMAGE_WIDTH, IMAGE_HEIGHT, image));
  });
