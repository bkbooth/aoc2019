const fs = require('fs').promises;
const path = require('path');

const INPUT_FILE = path.join(__dirname, 'input.txt');
const IMAGE_WIDTH = 25;
const IMAGE_HEIGHT = 6;

fs.readFile(INPUT_FILE, 'utf8')
  .then(input => input.trim())
  .then(pixels => {
    const layers = buildLayers(IMAGE_WIDTH, IMAGE_HEIGHT, pixels);
    const image = decodeImage(layers);
    renderImage(IMAGE_WIDTH, IMAGE_HEIGHT, image);
  });
/*.then(pixels => {
    const layers = buildLayers(IMAGE_WIDTH, IMAGE_HEIGHT, pixels);
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
  });*/

function buildLayers(width, height, pixels) {
  return pixels.match(new RegExp(`.{${width * height}}`, 'g'));
}

function decodeImage(layers) {
  const imageSize = layers[0].length;
  const image = [];
  for (let i = 0; i < imageSize; i++) {
    for (let j = 0; j < layers.length; j++) {
      if (layers[j][i] !== '2') {
        image[i] = layers[j][i];
        break;
      }
    }
  }
  return image.join('');
}

function renderImage(width, height, image) {
  for (let y = 0; y < height; y++) {
    let line = [];
    for (let x = 0; x < width; x++) {
      const pixel = image[y * width + x];
      line.push(pixel === '0' ? '█' : ' ');
    }
    console.log(line.join(''));
  }
}

/*function countDigitsInLayer(digit, layer) {
  return (layer.match(new RegExp(digit, 'g')) || []).length;
}*/
