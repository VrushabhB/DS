const quickSort = require("./quickSort");

test("quickSort should sort an array in ascending order", () => {
  const array = [5, 2, 8, 1, 9, 3];
  const expected = [1, 2, 3, 5, 8, 9];

  quickSort(array);

  expect(array).toEqual(expected);
});

test("quickSort should sort an array with duplicate elements", () => {
  const array = [5, 2, 8, 1, 9, 3, 5, 2];
  const expected = [1, 2, 2, 3, 5, 5, 8, 9];

  quickSort(array);

  expect(array).toEqual(expected);
});

test("quickSort should sort an array with negative numbers", () => {
  const array = [5, -2, 8, -1, 9, -3];
  const expected = [-3, -2, -1, 5, 8, 9];

  quickSort(array);

  expect(array).toEqual(expected);
});

test("quickSort should sort an empty array", () => {
  const array = [];
  const expected = [];

  quickSort(array);

  expect(array).toEqual(expected);
});

test("quickSort should sort an array with a single element", () => {
  const array = [5];
  const expected = [5];

  quickSort(array);

  expect(array).toEqual(expected);
});
