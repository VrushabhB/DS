function longestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  let charMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (charMap.has(char)) {
      start = Math.max(start, charMap.get(char) + 1);
    }

    charMap.set(char, i);
    maxLength = Math.max(maxLength, i - start + 1);
  }

  return maxLength;
}

module.exports = longestSubstring;
