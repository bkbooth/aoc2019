const { findAsteroids } = require('./asteroidDetector');
const { getAngle, getDistance } = require('./utils');

function asteroidDestroyer(starfield, station, toDestroy) {
  let asteroids = findAsteroids(starfield)
    .filter(([x, y]) => !(x === station[0] && y === station[1]))
    .sort(sortByAngleAndDistanceWith(station));

  let targetIndex = findFirstTargetIndex(station, asteroids);
  let totalDestroyed = 0;
  let lastDestroyed;
  let lastDestroyedIndex;
  let loopsSinceLastDestroyed = 0;

  while (asteroids.length && totalDestroyed < toDestroy) {
    if (targetIndex === lastDestroyedIndex) {
      loopsSinceLastDestroyed++;
    }

    let target = asteroids[targetIndex];
    if (
      lastDestroyed &&
      loopsSinceLastDestroyed < 2 &&
      getAngle(station, target) === getAngle(station, lastDestroyed)
    ) {
      // don't destroy asteroid behind last destroyed asteroid
      targetIndex++;
      if (targetIndex === asteroids.length) targetIndex = 0;
      continue;
    }

    lastDestroyed = [...target];
    lastDestroyedIndex = targetIndex;
    loopsSinceLastDestroyed = 0;
    totalDestroyed++;
    asteroids.splice(targetIndex, 1);
    if (targetIndex === asteroids.length) targetIndex = 0;
  }

  return lastDestroyed;
}

function sortByAngleAndDistanceWith(object) {
  return (a, b) => {
    const angleA = getAngle(object, a);
    const angleB = getAngle(object, b);
    if (angleA === angleB) {
      distanceA = getDistance(object, a);
      distanceB = getDistance(object, b);
      return distanceA < distanceB ? -1 : 1;
    } else {
      return angleA < angleB ? -1 : 1;
    }
  };
}

function findFirstTargetIndex(station, asteroids) {
  const upAngle = getAngle(station, [station[0], station[1] - 1]);
  let firstTargetIndex;
  let firstTargetDistance;
  let firstTargetAngleDiff = Number.POSITIVE_INFINITY;
  for (let i = 1; i < asteroids.length; i++) {
    let asteroid = asteroids[i];
    let angle = getAngle(station, asteroid);
    if (angle === upAngle) {
      // First asteroid directly above should be closest
      return i;
    }
    let angleDiff = getAngleDiff(angle, upAngle);
    // Not a great assumption that closest angle will be > 0 (< 180 deg)
    if (angleDiff > 0 && angleDiff < firstTargetAngleDiff) {
      let distance = getDistance(station, asteroid);
      if (firstTargetIndex && firstTargetDistance < distance) continue;
      firstTargetIndex = i;
      firstTargetDistance = distance;
      firstTargetAngleDiff = angleDiff;
    }
  }
}

function getAngleDiff(angle1, angle2) {
  return Math.atan2(Math.sin(angle1 - angle2), Math.cos(angle1 - angle2));
}

module.exports = { asteroidDestroyer };
