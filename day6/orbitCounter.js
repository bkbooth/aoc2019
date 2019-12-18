function orbitCounter(inputMap) {
  const map = inputMap.map(node => node.split(')'));
  return map.reduce((orbits, [orbitee]) => orbits + countIndirectOrbits(map, orbitee, 1), 0);
}

function countIndirectOrbits(map, searchObject, orbits) {
  const orbit = map.find(([, orbiter]) => orbiter === searchObject);
  if (orbit) return countIndirectOrbits(map, orbit[0], orbits + 1);
  else return orbits;
}

function minOrbitalTransfers(inputMap, from, to) {
  return 0;
}

module.exports = { minOrbitalTransfers, orbitCounter };
