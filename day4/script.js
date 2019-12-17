const { validatePassword } = require("./validatePassword");

const LOW_RANGE = 357253;
const HIGH_RANGE = 892942;

let validPasswords = 0;
for (let password = LOW_RANGE; password <= HIGH_RANGE; password++) {
  if (validatePassword(String(password))) validPasswords++;
}

console.log("Valid passwords in range:", validPasswords);
