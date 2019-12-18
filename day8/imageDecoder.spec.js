const { runTestCases } = require('../utils/runTestCases');
const { buildLayers, decodeImage, renderImage, countDigitsInString } = require('./imageDecoder');

runTestCases('day8:buildLayers', ([...args]) => buildLayers(...args), [
  {
    input: [3, 2, '123456789012'],
    expectedOutput: ['123456', '789012'],
  },
  {
    input: [2, 2, '0222112222120000'],
    expectedOutput: ['0222', '1122', '2212', '0000'],
  },
]);

runTestCases('day8:decodeImage', decodeImage, [
  {
    input: ['0222', '1122', '2212', '0000'],
    expectedOutput: '0110',
  },
  {
    input: ['022212', '112220', '221222', '000000'],
    expectedOutput: '011010',
  },
]);

runTestCases('day8:renderImage', ([...args]) => renderImage(...args), [
  {
    input: [2, 2, '0110'],
    expectedOutput: ' █\n█ \n',
  },
  {
    input: [2, 3, '011010'],
    expectedOutput: ' █\n█ \n█ \n',
  },
  {
    input: [3, 3, '101010101'],
    expectedOutput: '█ █\n █ \n█ █\n',
  },
]);

runTestCases('day8:countDigitsInString', ([...args]) => countDigitsInString(...args), [
  { input: ['1', ''], expectedOutput: 0 },
  { input: ['3', '8123047021934103412341234128079817234'], expectedOutput: 6 },
  {
    input: ['7', '8798y8n7y9847y98 yo87y8y89jx3476t234yr89723y49r872y89nt7'],
    expectedOutput: 8,
  },
]);
