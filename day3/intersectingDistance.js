function intersectingDistance(path1, path2) {
  return 1;
}

function parseCommand(command) {
  let [direction, ...distance] = command.split("");
  distance = Number(distance.join(""));
  return { direction, distance };
}

module.exports = {
  intersectingDistance,
  parseCommand
};
