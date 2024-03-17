function findMinMax(arr) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Calculate the sum of the first four elements for minimum value
  const minSum = arr.slice(0, 4).reduce((sum, num) => sum + num, 0);

  // Calculate the sum of the last four elements for maximum value
  const maxSum = arr.slice(1).reduce((sum, num) => sum + num, 0);

  // Print the minimum and maximum values
  console.log(`${minSum} ${maxSum}`);
}

// Example usage
const arr = [1, 2, 3, 4, 5];
findMinMax(arr);
