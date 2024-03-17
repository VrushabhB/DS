const twoSum = require("../twoSum2");

describe("twoSum", () => {
  test("should return indices of the two numbers that add up to the target", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = twoSum(nums, target);
    expect(result).toEqual([0, 1]);
  });

  test("should return indices of the two numbers that add up to the target", () => {
    const nums = [3, 2, 4];
    const target = 6;
    const result = twoSum(nums, target);
    expect(result).toEqual([0, 1]);
  });

  test("should return indices of the two numbers that add up to the target", () => {
    const nums = [3, 3];
    const target = 6;
    const result = twoSum(nums, target);
    expect(result).toEqual([0, 1]);
  });

  // Add more test cases here...
});
