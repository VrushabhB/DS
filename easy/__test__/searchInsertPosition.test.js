const searchInsertPosition = require("../searchInsertPosition");

describe("searchInsertPosition", () => {
  test("should return the index if the target is found", () => {
    expect(searchInsertPosition([1, 3, 5, 6], 5)).toBe(2);
    expect(searchInsertPosition([1, 3, 5, 6], 1)).toBe(0);
    expect(searchInsertPosition([1, 3, 5, 6], 6)).toBe(3);
  });

  test("should return the index where the target would be inserted in order", () => {
    expect(searchInsertPosition([1, 3, 5, 6], 2)).toBe(1);
    expect(searchInsertPosition([1, 3, 5, 6], 4)).toBe(2);
    expect(searchInsertPosition([1, 3, 5, 6], 0)).toBe(0);
    expect(searchInsertPosition([1, 3, 5, 6], 7)).toBe(4);
  });
});
