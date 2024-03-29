function sortedSquares(nums) {
  const n = nums.length;
  let left = 0;
  let right = n - 1;
  let index = n - 1; // Start filling from the end of the array

  while (left <= right) {
    const leftSquare = nums[left] * nums[left];
    const rightSquare = nums[right] * nums[right];

    if (leftSquare > rightSquare) {
      nums[index] = leftSquare;
      left++;
    } else {
      nums[index] = rightSquare;
      right--;
    }

    index--;
  }

  return nums;
}

// Example usage:
const nums = [-4, -1, 0, 3, 10];
sortedSquares(nums);
console.log(nums); // Output: [0, 1, 9, 16, 100]
