function twoSum2(array, target) {

  let left = 0;
  let right = array.length - 1;
  array.sort((a,b)=>a-b);
  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === target) {
      return [left, right];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return [];
}
const nums = [3, 2, 4];
const target = 6;
const result = twoSum2(nums, target);
module.exports = twoSum2;
