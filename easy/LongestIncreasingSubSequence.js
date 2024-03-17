/**
 * Given an unsorted array of integers nums, return the length of the longest continuous increasing subsequence
 *  (i.e. subarray). The subsequence must be strictly increasing.
 * A continuous increasing subsequence is defined by two indices\
 * l and r (l < r) such that it is [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] and for each l <= i < r, nums[i] < nums[i + 1].
 */

function findLengthOfLCIS(nums) {
  let maxLength = 1;
  let currentLength = 1;
  let maxStartIndex = 0;
  let n = nums.length;
  for (let i = 1; i < n; ++i) {
    if (nums[i] > nums[i - 1]) {
      currentLength++;
    } else {
      if (currentLength > maxLength) {
        maxLength = currentLength;
        maxStartIndex = i - maxLength;
      }
      currentLength = 1;
    }
  }
  if (currentLength > maxLength) {
    maxLength = currentLength;
    maxStartIndex = n - maxLength;
  }
  return nums.slice(maxStartIndex, maxLength + maxStartIndex).length;
}
module.exports = findLengthOfLCIS;
