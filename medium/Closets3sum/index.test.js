const threeSumClosest = require("./index");

test("Test Case 1", () => {
  const nums = [-1, 2, 1, -4];
  const target = 1;
  const result = threeSumClosest(nums, target);
  expect(result).toBe(2);
});

test("Test Case 2", () => {
  const nums = [0, 0, 0];
  const target = 1;
  const result = threeSumClosest(nums, target);
  expect(result).toBe(0);
});

test("Test Case 3", () => {
  const nums = [1, 1, 1, 1];
  const target = 0;
  const result = threeSumClosest(nums, target);
  expect(result).toBe(3);
});

test("Test Case 4", () => {
  const nums = [1, 2, 3, 4, 5];
  const target = 10;
  const result = threeSumClosest(nums, target);
  expect(result).toBe(9);
});

test("Test Case 5", () => {
  const nums = [-10, -5, 0, 5, 10];
  const target = 1;
  const result = threeSumClosest(nums, target);
  expect(result).toBe(0);
});
