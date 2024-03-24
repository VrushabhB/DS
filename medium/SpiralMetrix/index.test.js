const spiralOrder = require("./index");

test("Empty matrix should return an empty array", () => {
  expect(spiralOrder([])).toEqual([]);
});

test("Single row matrix should return the same row", () => {
  expect(spiralOrder([[1, 2, 3, 4]])).toEqual([1, 2, 3, 4]);
});

test("Single column matrix should return the same column", () => {
  expect(spiralOrder([[1], [2], [3], [4]])).toEqual([1, 2, 3, 4]);
});

test("Square matrix with even dimensions should return the correct spiral order", () => {
  const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];
  expect(spiralOrder(matrix)).toEqual([
    1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10,
  ]);
});

test("Square matrix with odd dimensions should return the correct spiral order", () => {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  expect(spiralOrder(matrix)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
});

test("Rectangular matrix should return the correct spiral order", () => {
  const matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
  ];
  expect(spiralOrder(matrix)).toEqual([
    1, 2, 3, 4, 5, 10, 15, 14, 13, 12, 11, 6, 7, 8, 9,
  ]);
});
