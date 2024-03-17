const mergeSort = require("./mergeSort");

// Test case 1: Empty array
test("Merge sort should return an empty array when given an empty array", () => {
  expect(mergeSort([])).toEqual([]);
});

// Test case 2: Array with one element
test("Merge sort should return the same array when given an array with one element", () => {
  expect(mergeSort([5])).toEqual([5]);
});

// Test case 3: Array with multiple elements
test("Merge sort should correctly sort an array with multiple elements", () => {
  expect(mergeSort([5, 2, 8, 3, 1])).toEqual([1, 2, 3, 5, 8]);
});

// Test case 4: Array with duplicate elements
test("Merge sort should correctly sort an array with duplicate elements", () => {
  expect(mergeSort([5, 2, 8, 3, 1, 5, 3])).toEqual([1, 2, 3, 3, 5, 5, 8]);
});

// Test case 5: Array with negative numbers
test("Merge sort should correctly sort an array with negative numbers", () => {
  expect(mergeSort([-5, 2, -8, 3, 1])).toEqual([-8, -5, 1, 2, 3]);
});
