/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  let length = Math.floor(n / 2);
  for (let i = 0; i <= length; ++i) {
    let pow = 2 ** i;
    if (pow > n) return false;
    if (pow === n) {
      return true;
    }
  }
  return false;
};
isPowerOfTwo(8);
module.exports = isPowerOfTwo;
