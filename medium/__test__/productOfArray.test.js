const productExceptSelf = require("../productExpectSelf/productOfArray");

describe("productExceptSelf", () => {
  test("should return the product of all elements except the current element", () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
    expect(productExceptSelf([5, 7, 2, 4])).toEqual([56, 40, 140, 70]);
    expect(productExceptSelf([2, 3, 0, 5])).toEqual([0, 0, 30, 0]);
  });

  test("should handle empty array", () => {
    expect(productExceptSelf([])).toEqual([]);
  });

  test("should handle array with single element", () => {
    expect(productExceptSelf([5])).toEqual([1]);
  });

  test("should handle array with multiple zeros", () => {
    expect(productExceptSelf([0, 2, 0, 4])).toEqual([0, 0, 0, 0]);
  });
});
