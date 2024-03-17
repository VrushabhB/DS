/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  if (!nums.length) return 0;
  let map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  let result = Math.max(...map.values());
  let maxFreqElements = [...map.keys()].filter(
    (item) => map.get(item) === result
  );

  return result * maxFreqElements.length;
};
maxFrequencyElements([10, 12, 11, 9, 6, 19, 11]);
module.exports = maxFrequencyElements;
