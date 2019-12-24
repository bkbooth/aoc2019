function moonSimulator(moonPositions, steps) {
  let moons = moonPositions.map(({ x, y, z }) => ({
    pos: { x, y, z },
    vel: { x: 0, y: 0, z: 0 },
  }));

  for (let s = 0; s < steps; s++) {
    moons = applyGravity(moons);
    moons = applyVelocity(moons);
  }
  return moons;
}

function applyGravity(moons) {
  let compared = [];
  for (let i = 0; i < moons.length; i++) {
    let moon1 = moons[i];
    for (let j = 0; j < moons.length; j++) {
      if (j === i) continue;
      let alreadyCompared = compared.some(
        pair => (pair[0] === i && pair[1] === j) || (pair[0] === j && pair[1] === i)
      );
      if (alreadyCompared) continue;
      compared.push([i, j]);

      let moon2 = moons[j];
      updateVelocity(moon1, moon2, 'x');
      updateVelocity(moon1, moon2, 'y');
      updateVelocity(moon1, moon2, 'z');
    }
  }
  return moons;
}

function updateVelocity(moon1, moon2, axis) {
  if (moon1.pos[axis] > moon2.pos[axis]) {
    moon1.vel[axis] -= 1;
    moon2.vel[axis] += 1;
  } else if (moon1.pos[axis] < moon2.pos[axis]) {
    moon1.vel[axis] += 1;
    moon2.vel[axis] -= 1;
  }
}

function applyVelocity(moons) {
  for (let i = 0; i < moons.length; i++) {
    let moon = moons[i];
    moon.pos.x += moon.vel.x;
    moon.pos.y += moon.vel.y;
    moon.pos.z += moon.vel.z;
  }
  return moons;
}

function totalSystemEnergy(moons) {
  return moons.reduce((total, moon) => {
    const potentialEnergy = Math.abs(moon.pos.x) + Math.abs(moon.pos.y) + Math.abs(moon.pos.z);
    const kineticEnergy = Math.abs(moon.vel.x) + Math.abs(moon.vel.y) + Math.abs(moon.vel.z);
    return total + potentialEnergy * kineticEnergy;
  }, 0);
}

module.exports = { moonSimulator, totalSystemEnergy };
