/**
 * 41. First Missing Positive

* Given an unsorted integer array nums. 
* Return the smallest positive integer that is not present in nums.

* You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.
 */

function firstMissingPositive(nums) {
  let n = nums.length;
  let j = 0;

  // Move all non-positive numbers to the left
  for (let i = 0; i < n; i++) {
    if (nums[i] <= 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
  }

  // Mark the presence of numbers in the rest of the array
  nums = nums.slice(j);
  n = nums.length;
  for (let i = 0; i < n; i++) {
    let num = Math.abs(nums[i]);
    if (num <= n) {
      nums[num - 1] = -Math.abs(nums[num - 1]);
    }
  }

  // Find the first index which is not marked
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }

  // If all indices are marked, return the next number
  return n + 1;
}
let res = firstMissingPositive([0]);
res;
module.exports = firstMissingPositive;
