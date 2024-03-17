const largestInterger = require("../largestNumber");

test("largestInterger should return the largest number when given an array of positive integers", () => {
  expect(largestInterger([1, 2, 3, 4, 5])).toBe("54321");
});

test("largestInterger should return the largest number when given an array of negative integers", () => {
  expect(largestInterger([-1, -2, -3, -4, -5])).toBe("-1-2-3-4-5");
});

test("largestInterger should return the largest number when given an array with a single element", () => {
  expect(largestInterger([9])).toBe("9");
});

test("largestInterger should return '0' when given an array with a single element '0'", () => {
  expect(largestInterger([0])).toBe("0");
});

test("largestInterger should return '0' when given an array with multiple elements, all of which are '0'", () => {
  expect(largestInterger([0, 0, 0, 0])).toBe("0");
});
const largestInterger = require("../largestNumber");

test("largestInterger should return the largest number when given an array of positive integers", () => {
  expect(largestInterger([1, 2, 3, 4, 5])).toBe("54321");
});

test("largestInterger should return the largest number when given an array of negative integers", () => {
  expect(largestInterger([-1, -2, -3, -4, -5])).toBe("-1-2-3-4-5");
});

test("largestInterger should return the largest number when given an array with a single element", () => {
  expect(largestInterger([9])).toBe("9");
});

test("largestInterger should return '0' when given an array with a single element '0'", () => {
  expect(largestInterger([0])).toBe("0");
});

test("largestInterger should return '0' when given an array with multiple elements, all of which are '0'", () => {
  expect(largestInterger([0, 0, 0, 0])).toBe("0");
});

test("largestInterger should return the largest number when given an array with both positive and negative integers", () => {
  expect(largestInterger([-9, 1, 0, -5, 3])).toBe("93105");
});

test("largestInterger should return the largest number when given an array with repeated elements", () => {
  expect(largestInterger([5, 5, 5, 5])).toBe("5555");
});

test("largestInterger should return the largest number when given an array with large numbers", () => {
  expect(largestInterger([1000, 100, 10, 1])).toBe("11001000");
});
