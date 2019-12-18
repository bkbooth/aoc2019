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
  let output = [];
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pixel = image[y * width + x];
      output.push(pixel === '1' ? '█' : ' ');
      if (x === width - 1) output.push('\n');
    }
  }
  return output.join('');
}

function countDigitsInString(digit, string) {
  return (string.match(new RegExp(digit, 'g')) || []).length;
}

module.exports = { buildLayers, decodeImage, renderImage, countDigitsInString };
