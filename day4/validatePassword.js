function validatePassword(password) {
  // Ensure input is 6 digits only
  if (!/^[0-9]{6,6}$/.test(password)) return false;

  let hasDouble = false;
  let repeatingDigit = null,
    repeatingIndices = [];
  for (let i = 1; i < password.length; i++) {
    const digit = password[i];
    const previousDigit = password[i - 1];

    // Ensure digits never decrease
    if (digit < previousDigit) return false;

    // Check for double
    if (digit === previousDigit) {
      if (digit === repeatingDigit) {
        // Continue existing digit run
        repeatingIndices.push(i);
      } else {
        // Start a new digit run
        repeatingDigit = digit;
        repeatingIndices = [i - 1, i];
      }
    } else {
      if (repeatingIndices.length === 2) {
        hasDouble = true;
      } else {
        // Reset the digit run
        repeatingDigit = null;
        repeatingIndices = [];
      }
    }
  }

  // Check if last digits were duplicates
  if (repeatingIndices.length === 2) {
    hasDouble = true;
  }

  return hasDouble;
}

module.exports = { validatePassword };
