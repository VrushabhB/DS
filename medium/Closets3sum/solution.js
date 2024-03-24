/**
 * 3Sum Closest
 * !Medium
 * Given an integer array nums of length n and an integer target,
 *  find three integers in nums such that the sum is closest to target.
 * Return the sum of the three integers.
 * You may assume that each input would have exactly one solution.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let n = nums.length;

  let closest = Infinity;
  for (let i = 0; i < n - 2; ++i) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let left = i + 1;
      let right = n - 1;
      while (left < right) {
        let sum = nums[i] + nums[left] + nums[right];
        if (Math.abs(target - sum) < Math.abs(target - closest)) {
          closest = sum;
        }
        if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return closest;
};
const nums = [0, 1, 2];
const target = 3;
const result = threeSumClosest(nums, target);
module.exports = threeSumClosest;
