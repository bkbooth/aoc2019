const { lcm } = require('./utils');

function moonSimulatorBySteps(moonPositions, steps) {
  let moons = moonPositions.map(({ x, y, z }) => ({
    pos: { x, y, z },
    vel: { x: 0, y: 0, z: 0 },
  }));
  let comparisons = getComparisons(moons);

  for (let s = 0; s < steps; s++) {
    moons = applyGravity(moons, comparisons);
    moons = applyVelocity(moons);
  }
  return moons;
}

function moonSimulatorFindRepetition(moonPositions) {
  let moons = moonPositions.map(({ x, y, z }) => ({
    pos: { x, y, z },
    vel: { x: 0, y: 0, z: 0 },
  }));
  let comparisons = getComparisons(moons);
  const initialMoons = {
    x: moons.map(moon => moon.pos.x),
    y: moons.map(moon => moon.pos.y),
    z: moons.map(moon => moon.pos.z),
  };

  function matchesInitialOnAxis(moons, axis) {
    return moons.every(
      (moon, index) => moon.pos[axis] === initialMoons[axis][index] && moon.vel[axis] === 0
    );
  }

  let steps = 1;
  let xRepetitionSteps = 0;
  let yRepetitionSteps = 0;
  let zRepetitionSteps = 0;
  do {
    if (!xRepetitionSteps) {
      moons = applyGravityForAxis(moons, comparisons, 'x');
      moons = applyVelocityForAxis(moons, 'x');
      if (matchesInitialOnAxis(moons, 'x')) xRepetitionSteps = steps;
    }
    if (!yRepetitionSteps) {
      moons = applyGravityForAxis(moons, comparisons, 'y');
      moons = applyVelocityForAxis(moons, 'y');
      if (matchesInitialOnAxis(moons, 'y')) yRepetitionSteps = steps;
    }
    if (!zRepetitionSteps) {
      moons = applyGravityForAxis(moons, comparisons, 'z');
      moons = applyVelocityForAxis(moons, 'z');
      if (matchesInitialOnAxis(moons, 'z')) zRepetitionSteps = steps;
    }
    steps++;
  } while (!(xRepetitionSteps && yRepetitionSteps && zRepetitionSteps));

  return [xRepetitionSteps, yRepetitionSteps, zRepetitionSteps].reduce(lcm, 1);
}

function totalSystemEnergy(moons) {
  return moons.reduce((total, moon) => {
    const potentialEnergy = Math.abs(moon.pos.x) + Math.abs(moon.pos.y) + Math.abs(moon.pos.z);
    const kineticEnergy = Math.abs(moon.vel.x) + Math.abs(moon.vel.y) + Math.abs(moon.vel.z);
    return total + potentialEnergy * kineticEnergy;
  }, 0);
}

function applyGravity(moons, comparisons) {
  moons = applyGravityForAxis(moons, comparisons, 'x');
  moons = applyGravityForAxis(moons, comparisons, 'y');
  moons = applyGravityForAxis(moons, comparisons, 'z');
  return moons;
}

function applyGravityForAxis(moons, comparisons, axis) {
  for (let i = 0; i < comparisons.length; i++) {
    let moon1 = moons[comparisons[i][0]];
    let moon2 = moons[comparisons[i][1]];
    if (moon1.pos[axis] > moon2.pos[axis]) {
      moon1.vel[axis]--;
      moon2.vel[axis]++;
    } else if (moon1.pos[axis] < moon2.pos[axis]) {
      moon1.vel[axis]++;
      moon2.vel[axis]--;
    }
  }
  return moons;
}

function applyVelocity(moons) {
  applyVelocityForAxis(moons, 'x');
  applyVelocityForAxis(moons, 'y');
  applyVelocityForAxis(moons, 'z');
  return moons;
}

function applyVelocityForAxis(moons, axis) {
  for (let i = 0; i < moons.length; i++) {
    let moon = moons[i];
    moon.pos[axis] += moon.vel[axis];
  }
  return moons;
}

function getComparisons(moons) {
  let comparisons = [];
  for (let i = 0; i < moons.length; i++) {
    for (let j = i + 1; j < moons.length; j++) {
      comparisons.push([i, j]);
    }
  }
  return comparisons;
}

module.exports = { moonSimulatorBySteps, moonSimulatorFindRepetition, totalSystemEnergy };
