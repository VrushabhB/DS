function twoSum(target, array) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let sum = array[left] + array[right];
    if (target === sum) {
      return [left, right];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return [];
}
let array = [2, 7, 11, 15];
let res = twoSum(9, array);
console.log("res", res);
module.exports = twoSum;
