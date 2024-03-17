/**
 * Given a sorted array of distinct integers and a target value, 
 * return the index if the target is found. If not,
 *  return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 */

function searchInsertPosition(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
searchInsertPosition([1, 3, 5, 6], 5);
module.exports = searchInsertPosition;
