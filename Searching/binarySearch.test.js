const binarySearch = require("./binarySearch");

describe("binarySearch", () => {
  test("should return the number if it exists in the array", () => {
    const array = [1, 3, 5, 7, 9];
    const num = 5;
    expect(binarySearch(array, num)).toBe(num);
  });

  test("should return undefined if the number does not exist in the array", () => {
    const array = [1, 3, 5, 7, 9];
    const num = 4;
    expect(binarySearch(array, num)).toBeUndefined();
  });

  test("should return the number if it is the first element in the array", () => {
    const array = [1, 3, 5, 7, 9];
    const num = 1;
    expect(binarySearch(array, num)).toBe(num);
  });

  test("should return the number if it is the last element in the array", () => {
    const array = [1, 3, 5, 7, 9];
    const num = 9;
    expect(binarySearch(array, num)).toBe(num);
  });

  test("should return undefined if the array is empty", () => {
    const array = [];
    const num = 5;
    expect(binarySearch(array, num)).toBeUndefined();
  });
});
