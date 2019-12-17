function calculateFuel(mass) {
  return Math.max(0, Math.floor(mass / 3) - 2);
}

function calculateFuelRecursive(mass) {
  const fuelRequired = calculateFuel(mass);
  if (fuelRequired <= 0) return fuelRequired;
  return fuelRequired + calculateFuelRecursive(fuelRequired);
}

module.exports = {
  calculateFuel,
  calculateFuelRecursive,
};
