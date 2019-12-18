const fs = require('fs').promises;
const path = require('path');

const INPUT_FILE = path.join(__dirname, 'input.txt');
const IMAGE_WIDTH = 25;
const IMAGE_HEIGHT = 6;
const LAYER_SIZE = IMAGE_WIDTH * IMAGE_HEIGHT;
const LAYER_REGEXP = new RegExp(`.{${LAYER_SIZE}}`, 'g');

fs.readFile(INPUT_FILE, 'utf8')
  .then(input => input.trim())
  .then(pixels => {
    const layers = pixels.match(LAYER_REGEXP);
    let fewest0s = Number.POSITIVE_INFINITY;
    let fewest0sLayer;
    layers.forEach(layer => {
      const numberOf0s = countDigitsInLayer(0, layer);
      if (numberOf0s < fewest0s) {
        fewest0s = numberOf0s;
        fewest0sLayer = layer;
      }
    });

    const numberOf1s = countDigitsInLayer(1, fewest0sLayer);
    const numberOf2s = countDigitsInLayer(2, fewest0sLayer);

    console.log('Result:', numberOf1s * numberOf2s);
  });

function countDigitsInLayer(digit, layer) {
  return (layer.match(new RegExp(digit, 'g')) || []).length;
}
