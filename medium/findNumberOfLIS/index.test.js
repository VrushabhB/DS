const findNumberOfLIS = require("./index");

test("should return the number of longest increasing subsequences", () => {
  expect(findNumberOfLIS([1, 3, 5, 4, 7])).toEqual(2);
  expect(findNumberOfLIS([2, 2, 2, 2, 2])).toEqual(5);
  expect(findNumberOfLIS([1, 2, 4, 3, 5, 4, 7, 2])).toEqual(3);
  expect(findNumberOfLIS([10, 9, 2, 5, 3, 7, 101, 18])).toEqual(4);
});

test("should return 0 if the input array is empty", () => {
  expect(findNumberOfLIS([])).toEqual(0);
});

test("should return 1 if the input array has only one element", () => {
  expect(findNumberOfLIS([1])).toEqual(1);
  expect(findNumberOfLIS([5])).toEqual(1);
});

test("should return 1 if the input array is already sorted in increasing order", () => {
  expect(findNumberOfLIS([1, 2, 3, 5, 4, 7])).toEqual(2);
  expect(findNumberOfLIS([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(1);
});

test("should return 1 if the input array has all elements equal", () => {
  expect(findNumberOfLIS([2, 2, 2, 2, 2])).toEqual(1);
  expect(findNumberOfLIS([7, 7, 7, 7, 7, 7, 7])).toEqual(1);
});
