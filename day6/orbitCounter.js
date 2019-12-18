function orbitCounter(inputMap) {
  const map = inputMap.map(node => node.split(')'));
  return map.reduce((orbits, [orbitee]) => orbits + countIndirectOrbits(map, orbitee, 1), 0);
}

function countIndirectOrbits(map, searchObject, orbits) {
  const orbit = findOrbit(map, searchObject);
  if (orbit) return countIndirectOrbits(map, orbit[0], orbits + 1);
  else return orbits;
}

function minOrbitalTransfers(inputMap, from, to) {
  const map = inputMap.map(node => node.split(')'));
  const fromOrbit = findOrbit(map, from);
  const toOrbit = findOrbit(map, to);

  const fromOrbitList = buildOrbitList(map, fromOrbit[0], [[fromOrbit[0], 0]]);
  const toOrbitList = buildOrbitList(map, toOrbit[0], [[toOrbit[0], 0]]);

  for (let i = 0; i < fromOrbitList.length; i++) {
    for (let j = 0; j < toOrbitList.length; j++) {
      const [fromObject, fromTransfers] = fromOrbitList[i];
      const [toObject, toTransfers] = toOrbitList[j];
      if (fromObject === toObject) {
        return fromTransfers + toTransfers;
      }
    }
  }

  throw new Error(`No possible transfer from ${from} to ${to}`);
}

function buildOrbitList(map, searchObject, orbitList) {
  const orbit = findOrbit(map, searchObject);
  if (orbit) {
    const [orbitee] = orbit;
    const [, currentTransferCount] = orbitList[orbitList.length - 1];
    orbitList.push([orbitee, currentTransferCount + 1]);
    return buildOrbitList(map, orbitee, orbitList);
  } else {
    return orbitList;
  }
}

function findOrbit(map, searchObject) {
  return map.find(([, orbiter]) => orbiter === searchObject);
}

module.exports = { minOrbitalTransfers, orbitCounter };
