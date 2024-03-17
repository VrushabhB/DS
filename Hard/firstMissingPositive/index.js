/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let n = nums.length;
  let j = 0;
  // move all non positive to left
  for (let i = 1; i < n; ++i) {
    if (nums[i] <= 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
  }
  nums = nums.slice(j);
  n = nums.length;
  //mark the present
  for (let i = 0; i < n; ++i) {
    let num = Math.abs(nums[i]);
    if (num <= n) {
      nums[num - 1] = -Math.abs(nums[num - 1]);
    }
  }

  //check for first positive
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }
  return n + 1;
};

let res = firstMissingPositive([0]);
console.log("res", res);
module.exports = firstMissingPositive;
