/**
Given an integer array nums, return an array answer such that answer[i]
is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and
without using the division operation. 
 */
function productExceptSelf(nums) {
  let product = nums.reduce((prev, cur) => (prev *= cur), 1);
  let result = [];
  for (let i = 0; i < nums.length; ++i) {
    let devidend = product;
    let devisor = nums[i];
    let quotient = 0;
    while (devidend > devisor) {
      devidend -= devisor;
      quotient++;
    }
    result.push(quotient);
  }
  return result;
}

module.exports = productExceptSelf;
