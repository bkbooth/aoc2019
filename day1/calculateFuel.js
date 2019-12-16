module.exports = function calculateFuel(mass) {
  return Math.max(0, Math.floor(mass / 3) - 2);
};
