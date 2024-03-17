/**
 * 673. Number of Longest Increasing Subsequence
 * !Medium
 * Given an integer array nums, return the number of longest increasing subsequences.
 * Notice that the sequence has to be strictly increasing.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumberOfLIS = function (arr) {
  const n = arr.length;
  if (n === 0) return 0;

  // Initialize dp table to store counts of LIS ending at each index
  const dp = new Array(n).fill(1);

  // Initialize result variable to store the overall count
  let result = 0;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        // If current element is greater than previous element,
        // consider the LIS ending at j for possible extension
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    // Update result with the maximum count found so far
    result = Math.max(result, dp[i]);
  }

  // Return the count of the longest increasing subsequences
  return result;
};
let res = findNumberOfLIS([10, 9, 2, 5, 1, 4, 3, 6]);
res;
module.exports = findNumberOfLIS;
