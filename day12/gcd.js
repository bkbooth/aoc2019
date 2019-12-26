module.exports = function gcd(a, b) {
  return a ? gcd(b % a, a) : b;
};
