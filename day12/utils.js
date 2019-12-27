/**
 * Greatest common divisor
 *
 * @param {number} a
 * @param {number} b
 *
 * @returns {number}
 */
function gcd(a, b) {
  return a ? gcd(b % a, a) : b;
}

/**
 * Least common multiple
 *
 * @param {number} a
 * @param {number} b
 *
 * @returns {number}
 */
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

module.exports = { gcd, lcm };
