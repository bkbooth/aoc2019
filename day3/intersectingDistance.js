function intersectingDistanceByClosest(path1, path2) {
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

function intersectingDistanceBySteps(path1, path2) {
  const pointsOnPath1 = pointsOnPath(path1);
  const pointsOnPath2 = pointsOnPath(path2);

  let fewestSteps = Number.POSITIVE_INFINITY;
  for (let i = 0; i < pointsOnPath1.length; i++) {
    for (let j = 0; j < pointsOnPath2.length; j++) {
      const [x1, y1, steps1] = pointsOnPath1[i];
      const [x2, y2, steps2] = pointsOnPath2[j];
      if (x1 === x2 && y1 === y2 && steps1 + steps2 < fewestSteps) {
        fewestSteps = steps1 + steps2;
      }
    }
  }

  if (!Number.isFinite(fewestSteps)) {
    throw new Error("Paths do not intersect");
  }
  return fewestSteps;
}

function parseCommand(command) {
  let [direction, ...distance] = command.split("");
  distance = Number(distance.join(""));
  return { direction, distance };
}

function pointsOnPath(path) {
  return path.reduce((points, command) => {
    const { direction, distance } = parseCommand(command);
    let [x, y, steps] = points.length ? points[points.length - 1] : [0, 0, 0];
    let newPoints = [];
    for (let step = 0; step < distance; step++) {
      ++steps;
      if (direction === "U") {
        newPoints.push([x, ++y, steps]);
      } else if (direction === "R") {
        newPoints.push([++x, y, steps]);
      } else if (direction === "D") {
        newPoints.push([x, --y, steps]);
      } else if (direction === "L") {
        newPoints.push([--x, y, steps]);
      }
    }
    return [...points, ...newPoints];
  }, []);
}

function sortByClosest([x1, y1], [x2, y2]) {
  const distance1 = Math.abs(x1) + Math.abs(y1);
  const distance2 = Math.abs(x2) + Math.abs(y2);
  return distance1 === distance2 ? 0 : distance1 < distance2 ? -1 : 1;
}

module.exports = {
  intersectingDistanceByClosest,
  intersectingDistanceBySteps,
  parseCommand,
  pointsOnPath
};
