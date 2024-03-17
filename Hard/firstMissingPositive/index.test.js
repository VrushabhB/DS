const firstMissingPositive = require("./solution");

test("should return the first missing positive number", () => {
  expect(firstMissingPositive([1, 2, 0])).toEqual(3);
  expect(firstMissingPositive([3, 4, -1, 0, 1])).toEqual(2);
  expect(firstMissingPositive([7, 8, 9, 11, 12])).toEqual(1);
  expect(firstMissingPositive([1, 2, 3, 4, 5, 10])).toEqual(6);
});

test("should return 1 if the input array is empty", () => {
  expect(firstMissingPositive([])).toEqual(1);
});
test("should return 1 if the input array is [0]", () => {
  expect(firstMissingPositive([0])).toEqual(1);
});

test("should return 1 if the input array does not contain any positive numbers", () => {
  expect(firstMissingPositive([-1, -2, -3])).toEqual(1);
  expect(firstMissingPositive([0, 0, 0])).toEqual(1);
});

test("should return the smallest missing positive number if the input array contains duplicates", () => {
  expect(firstMissingPositive([1, 1, 1, 2, 2, 3, 3, 4, 4])).toEqual(5);
  expect(firstMissingPositive([1, 2, 2, 3, 4, 4, 5, 5])).toEqual(6);
});
