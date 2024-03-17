const twoSum = require("./twoSum");

describe("twoSum", () => {
  it("should return indices of two numbers that add up to the target", () => {
    const array = [2, 7, 11, 15];
    const target = 9;
    const expected = [0, 1];
    const result = twoSum(array, target);
    expect(result).toEqual(expected);
  });

  it("should return indices of two numbers that add up to the target", () => {
    const array = [3, 2, 4];
    const target = 6;
    const expected = [1, 2];
    const result = twoSum(array, target);
    expect(result).toEqual(expected);
  });

  it("should return indices of two numbers that add up to the target", () => {
    const array = [3, 3];
    const target = 6;
    const expected = [0, 1];
    const result = twoSum(array, target);
    expect(result).toEqual(expected);
  });

  it("should return null if no two numbers add up to the target", () => {
    const array = [1, 2, 3, 4, 5];
    const target = 10;
    const expected = null;
    const result = twoSum(array, target);
    expect(result).toEqual(expected);
  });
});
