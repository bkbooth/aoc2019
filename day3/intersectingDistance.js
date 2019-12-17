function intersectingDistance(path1, path2) {
  return 1;
}

function parseCommand(command) {
  let [direction, ...distance] = command.split("");
  distance = Number(distance.join(""));
  return { direction, distance };
}

function pointsOnPath(path) {
  return path.reduce((points, command) => {
    const { direction, distance } = parseCommand(command);
    let [x, y] = points.length ? points[points.length - 1] : [0, 0];
    let steps = [];
    for (let step = 0; step < distance; step++) {
      if (direction === "U") {
        steps.push([x, ++y]);
      } else if (direction === "R") {
        steps.push([++x, y]);
      } else if (direction === "D") {
        steps.push([x, --y]);
      } else if (direction === "L") {
        steps.push([--x, y]);
      }
    }
    return [...points, ...steps];
  }, []);
}

module.exports = {
  intersectingDistance,
  parseCommand,
  pointsOnPath
};
