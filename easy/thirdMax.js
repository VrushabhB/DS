/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let max1 = -1;
  let max2 = -1;
  let max3 = -1;

  for (let i = 0; i < nums.length; ++i) {
    if (max1 < nums[i]) {
      max2 = max1;
      max1 = nums[i];
    } else if (nums[i] > max2 && max2 < max1) {
      max3 = max2;
      max2 = nums[i];
    } else if (max3) {
      if (max3 < nums[i]) {
        max3 = nums[i];
      }
    }
  }
  return max3 > 0 ? max3 : max1;
};
const res = thirdMax([1, 2, 2]);
console.log("res", res);
module.exports = thirdMax;
