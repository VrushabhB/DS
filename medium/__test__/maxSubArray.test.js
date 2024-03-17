const getMaxSubArray = require("../maxSubArray");

describe("getMaxSubArray", () => {
  test("should return the maximum sum of a subarray", () => {
    expect(getMaxSubArray([1, 2, 3, 4, 5])).toBe(15);
    expect(getMaxSubArray([-1, -2, -3, -4, -5])).toBe(-1);
    expect(getMaxSubArray([1, -2, 3, -4, 5])).toBe(5);
    expect(getMaxSubArray([1, 2, -3, 4, -5])).toBe(4);
    expect(getMaxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });

  test("should return the element itself if the array contains only one element", () => {
    expect(getMaxSubArray([5])).toBe(5);
    expect(getMaxSubArray([-10])).toBe(-10);
  });

  test("should return 0 if the array is empty", () => {
    expect(getMaxSubArray([])).toBe(0);
  });
});
