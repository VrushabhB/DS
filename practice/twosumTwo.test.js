const twoSum = require("./twosumTwo");

test("twoSum should return [0, 1] for target 9 and array [2, 7, 11, 15]", () => {
  expect(twoSum(9, [2, 7, 11, 15])).toEqual([0, 1]);
});

test("twoSum should return [1, 2] for target 18 and array [2, 7, 11, 15]", () => {
  expect(twoSum(18, [2, 7, 11, 15])).toEqual([1, 2]);
});

test("twoSum should return [0, 3] for target 17 and array [2, 7, 11, 15]", () => {
  expect(twoSum(17, [2, 7, 11, 15])).toEqual([0, 3]);
});

test("twoSum should return [2, 3] for target 26 and array [2, 7, 11, 15]", () => {
  expect(twoSum(26, [2, 7, 11, 15])).toEqual([2, 3]);
});

test("twoSum should return [] for target 5 and array [2, 7, 11, 15]", () => {
  expect(twoSum(5, [2, 7, 11, 15])).toEqual([]);
});
