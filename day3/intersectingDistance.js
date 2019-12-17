function intersectingDistance(path1, path2) {
  const pointsOnPath1 = pointsOnPath(path1).sort(sortByClosest);
  const pointsOnPath2 = pointsOnPath(path2).sort(sortByClosest);

  for (let i = 0; i < pointsOnPath1.length; i++) {
    for (let j = 0; j < pointsOnPath2.length; j++) {
      const [x1, y1] = pointsOnPath1[i];
      const [x2, y2] = pointsOnPath2[j];
      if (x1 === x2 && y1 === y2) {
        return Math.abs(x1) + Math.abs(y1);
      }
    }
  }

  throw new Error("Paths do not intersect");
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

function sortByClosest([x1, y1], [x2, y2]) {
  const distance1 = Math.abs(x1) + Math.abs(y1);
  const distance2 = Math.abs(x2) + Math.abs(y2);
  return distance1 === distance2 ? 0 : distance1 < distance2 ? -1 : 1;
}

module.exports = {
  intersectingDistance,
  parseCommand,
  pointsOnPath
};
