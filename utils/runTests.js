const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const BASE_PATH = process.cwd();

const folders = process.argv.slice(2).map(arg => path.join(BASE_PATH, arg));
const specFiles = findSpecFiles(folders.length ? folders : [BASE_PATH]);
runInSeries(specFiles.map(specFile => () => execSpecFile(specFile)));

function findSpecFiles(folders) {
  return folders
    .map(folder => {
      const listOfObjects = fs.readdirSync(folder).filter(item => item[0] !== '.');
      const specFiles = listOfObjects
        .filter(item => /\.spec\.js$/.test(item))
        .map(item => path.join(folder, item));
      const folders = listOfObjects
        .filter(item => fs.statSync(path.join(folder, item)).isDirectory())
        .map(item => path.join(folder, item));
      return [...specFiles, ...findSpecFiles(folders)];
    })
    .reduce((items, item) => [...items, ...item], []);
}

function execSpecFile(specFile) {
  return new Promise((resolve, reject) => {
    const process = childProcess.fork(specFile);
    process.once('error', error => reject(error));
    process.once('exit', code => resolve(code));
  });
}

function runInSeries(promises) {
  return promises.reduce((previous, promise) => previous.then(promise), Promise.resolve());
}
