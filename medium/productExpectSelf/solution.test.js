const productExceptSelf = require("./solution");

test("should return the product of all elements except self", () => {
  expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  expect(productExceptSelf([0, 1, 2, 3])).toEqual([6, 0, 0, 0]);
  expect(productExceptSelf([-1, -2, -3, -4])).toEqual([-24, -12, -8, -6]);
});

test("should return an empty array if input array is empty", () => {
  expect(productExceptSelf([])).toEqual([]);
});

test("should return an array with all zeros if input array contains only zeros", () => {
  expect(productExceptSelf([0, 0, 0, 0])).toEqual([0, 0, 0, 0]);
});

test("should return an array with all zeros except one if input array contains only one non-zero element", () => {
  expect(productExceptSelf([0, 0, 0, 1])).toEqual([0, 0, 0, 0]);
  expect(productExceptSelf([1, 0, 0, 0])).toEqual([0, 0, 0, 0]);
});

test("should return an array with all zeros except two if input array contains only two non-zero elements", () => {
  expect(productExceptSelf([0, 0, 2, 3])).toEqual([0, 0, 0, 0]);
  expect(productExceptSelf([1, 0, 3, 0])).toEqual([0, 0, 0, 0]);
});

test("should return an array with all zeros except three if input array contains only three non-zero elements", () => {
  expect(productExceptSelf([0, 2, 3, 4])).toEqual([24, 0, 0, 0]);
  expect(productExceptSelf([1, 0, 3, 4])).toEqual([0, 12, 0, 0]);
});

test("should return an array with all zeros except four if input array contains only four non-zero elements", () => {
  expect(productExceptSelf([2, 3, 4, 5])).toEqual([60, 40, 30, 24]);
  expect(productExceptSelf([1, 0, 0, 0])).toEqual([0, 0, 0, 0]);
});
