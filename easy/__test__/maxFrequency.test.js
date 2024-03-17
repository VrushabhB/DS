const maxFrequencyElements = require("../maxFrequency");

test("should return the correct maximum frequency multiplied by the number of elements with that frequency", () => {
  expect(maxFrequencyElements([10, 12, 11, 9, 6, 19, 11])).toBe(2);
  expect(maxFrequencyElements([1, 2, 3, 4, 5])).toBe(5);
  expect(maxFrequencyElements([1, 1, 1, 1, 1])).toBe(5);
  expect(maxFrequencyElements([1, 2, 2, 3, 3, 3])).toBe(3);
});

test("should return 0 if the input array is empty", () => {
  expect(maxFrequencyElements([])).toBe(0);
});

test("should return 0 if all elements in the input array have different frequencies", () => {
  expect(maxFrequencyElements([1, 2, 3, 4, 5])).toBe(5);
});

test("should handle negative numbers in the input array", () => {
  expect(maxFrequencyElements([-1, -2, -2, -3, -3, -3])).toBe(3);
});

test("should handle floating point numbers in the input array", () => {
  expect(maxFrequencyElements([1.5, 2.5, 2.5, 3.5, 3.5, 3.5])).toBe(3);
});
