const ASTEROID = '#';

function asteroidDetector(starfield) {
  let bestAsteroid = [-1, -1];
  let mostAsteroids = -1;

  const asteroids = findAsteroids(starfield);
  asteroids.forEach(asteroid1 => {
    const canSeeAsteroids = [];
    asteroids.forEach(asteroid2 => {
      if (asteroid1[0] === asteroid2[0] && asteroid1[1] === asteroid2[1]) return;
      const hasInSameLine = canSeeAsteroids.some(asteroid3 =>
        isInSameLine(asteroid1, asteroid2, asteroid3)
      );
      if (!hasInSameLine) canSeeAsteroids.push(asteroid2);
    });

    if (canSeeAsteroids.length > mostAsteroids) {
      bestAsteroid = asteroid1;
      mostAsteroids = canSeeAsteroids.length;
    }
  });

  return [...bestAsteroid, mostAsteroids];
}

function findAsteroids(starfield) {
  let asteroids = [];

  for (let y = 0; y < starfield.length; y++) {
    for (let x = 0; x < starfield[y].length; x++) {
      if (starfield[y][x] === ASTEROID) {
        asteroids.push([x, y]);
      }
    }
  }

  return asteroids;
}

function isInSameLine([sourcex, sourcey], [dest1x, dest1y], [dest2x, dest2y]) {
  const angle1 = Math.atan2(sourcey - dest1y, sourcex - dest1x);
  const angle2 = Math.atan2(sourcey - dest2y, sourcex - dest2x);

  return angle1 === angle2;
}

module.exports = { asteroidDetector, findAsteroids, isInSameLine };
