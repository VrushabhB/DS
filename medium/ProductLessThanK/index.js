/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 0) return k;
  let n = nums.length;
  let result = [];
  for (let i = 0; i < n; ++i) {
    let products = [];
    let product = nums[i];
    if (nums[i] < k) {
      result.push(nums[i]);
    }
    for (let j = i; j <= i; ++j) {
      product *= nums[j];
      if (product < k) {
        products[i] = [...products, nums[j]];
      }
    }
    if (products.length) {
      result.push(products);
    }
  }
  return result.lengthHi;
};
numSubarrayProductLessThanK([10, 5, 2, 6], 100);
module.exports = numSubarrayProductLessThanK;
