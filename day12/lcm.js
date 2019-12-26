const gcd = require('./gcd');

module.exports = function lcm(a, b) {
  return (a * b) / gcd(a, b);
};
