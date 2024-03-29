/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length === 1) return s;
  let maxStr = "";
  for (let i = 1; i <= s.length; ++i) {
    for (let j = 0; j <= i; ++j) {
      let str = s.substring(j, i);
      let reverse = str.split("").reverse().join("");
      if (str === reverse) {
        if (maxStr.length < reverse.length) {
          maxStr = reverse;
        }
      }
    }
  }
  return maxStr;
};
longestPalindrome("bb");
module.exports = longestPalindrome;
