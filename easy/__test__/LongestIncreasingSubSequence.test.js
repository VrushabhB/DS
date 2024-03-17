const findLengthOfLCIS = require("../LongestIncreasingSubSequence");

describe("findLengthOfLCIS", () => {
  test("should return 0 for an empty array", () => {
    expect(findLengthOfLCIS([])).toBe(0);
  });

  test("should return 1 for an array with a single element", () => {
    expect(findLengthOfLCIS([5])).toBe(1);
  });

  test("should return the length of the longest increasing subsequence", () => {
    expect(findLengthOfLCIS([1, 3, 5, 4, 7])).toBe(3);
    expect(findLengthOfLCIS([2, 2, 2, 2, 2])).toBe(1);
    expect(findLengthOfLCIS([1, 2, 3, 4, 5])).toBe(5);
    expect(findLengthOfLCIS([5, 4, 3, 2, 1])).toBe(1);
    expect(findLengthOfLCIS([1, 2, 3, 2, 4, 5, 6, 7])).toBe(5);
  });
});
