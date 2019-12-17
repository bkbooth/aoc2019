function validatePassword(password) {
  // Ensure input is 6 digits only
  if (!/^[0-9]{6,6}$/.test(password)) return false;

  let hasDouble = false;
  for (let i = 0; i < password.length - 1; i++) {
    const digit = password[i];
    const nextDigit = password[i + 1];

    // Ensure digits never decrease
    if (nextDigit < digit) return false;

    // Check for double
    if (digit === nextDigit) hasDouble = true;
  }

  return hasDouble;
}

module.exports = { validatePassword };
