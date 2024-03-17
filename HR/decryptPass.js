function decryptPassword(encryptedPassword) {
  let password = encryptedPassword.split("");

  let i = 0;
  while (i < password.length) {
    let currentChar = password[i];

    if (
      currentChar === currentChar.toLowerCase() &&
      password[i + 17] === password[i + 17].toUpperCase()
    ) {
      // Swap characters
      let temp = password[i];
      password[i] = password[i + 17];
      password[i + 17] = temp;

      // Add '*'
      password.splice(i + 2, 0, "*");

      i += 2; // Move to the next character after '*'
    } else if (!isNaN(parseInt(currentChar))) {
      // Replace number with 0
      password[i] = "0";

      // Place original number at the start
      password.unshift(currentChar);

      i++; // Move to the next character
    } else {
      i++; // Move to the next character
    }
  }

  return password.join("");
}

// Example usage
const encryptedPassword = "p4s2w0r6";
const originalPassword = decryptPassword(encryptedPassword);
console.log(originalPassword);
