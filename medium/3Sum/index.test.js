const threeSum = require("./index");

test("should return all the triplets that sum up to zero", () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
    [-1, -1, 2],
    [-1, 0, 1],
  ]);
  expect(threeSum([0, 0, 0, 0])).toEqual([[0, 0, 0]]);
  expect(threeSum([-2, 0, 0, 2, 2])).toEqual([[-2, 0, 2]]);
  expect(threeSum([-2, 0, 1, 1, 2])).toEqual([
    [-2, 0, 2],
    [-2, 1, 1],
  ]);
});

test("should return an empty array if no triplets sum up to zero", () => {
  expect(threeSum([1, 2, 3, 4, 5])).toEqual([]);
  expect(threeSum([-1, -2, -3, -4, -5])).toEqual([]);
});

test("should return an empty array if the input array has less than 3 elements", () => {
  expect(threeSum([])).toEqual([]);
  expect(threeSum([1])).toEqual([]);
  expect(threeSum([1, 2])).toEqual([]);
});

test("should return an empty array if the input array contains only duplicate elements", () => {
  expect(threeSum([1, 1, 1, 1, 1])).toEqual([]);
  expect(threeSum([0, 0, 0, 0, 0, 0])).toEqual([[0, 0, 0]]);
});
