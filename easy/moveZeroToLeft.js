/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let n = nums.length;
  let insertPos = 0;
  for (let i = 0; i < n; ++i) {
    if (nums[i] !== 0) {
      nums[insertPos] = nums[i];
      insertPos++;
    }
  }
  while (insertPos < n) {
    nums[insertPos] = 0;
    insertPos++;
  }
};
let res = moveZeroes([0, 1, 0, 3, 12]);
console.log(res);
module.exports = moveZeroes;
