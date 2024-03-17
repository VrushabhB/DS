function productExceptSelf(nums) {
  let n = nums.length;
  let output = new Array(n).fill(1);

  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    output[i] *= leftProduct;
    leftProduct *= nums[i];
  }

  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    output[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return output;
}
//will fail when array will contain 0
function productExceptSelf2(nums) {
  let n = nums.length;
  let result = nums.reduce((pre, cur) => pre * cur, 1);
  if (result < 0) return new Array(n).fill(0);
  let output = [];
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] > 0) {
      output.push(result / nums[i]);
    } else {
      output.push(result);
    }
  }
  return output;
}
// productExceptSelf2([1, 2, 3, 4]);
productExceptSelf2([0, 1, 2, 3]);
module.exports = productExceptSelf;
