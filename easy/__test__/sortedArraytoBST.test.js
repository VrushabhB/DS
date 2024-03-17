const sortedArrayToBST = require("../sortedArraytoBST");

describe("sortedArrayToBST", () => {
  test("should convert an empty array to null", () => {
    const nums = [];
    const result = sortedArrayToBST(nums);
    expect(result).toBeNull();
  });

  test("should convert a single element array to a BST", () => {
    const nums = [1];
    const result = sortedArrayToBST(nums);
    expect(result.val).toBe(1);
    expect(result.left).toBeNull();
    expect(result.right).toBeNull();
  });

  test("should convert a sorted array to a height-balanced BST", () => {
    const nums = [-10, -3, 0, 5, 9];
    const result = sortedArrayToBST(nums);

    // The resulting BST should look like:
    //      0
    //    /   \
    //  -3     9
    //  /     /
    // -10   5

    expect(result.val).toBe(0);
    expect(result.left.val).toBe(-3);
    expect(result.left.left.val).toBe(-10);
    expect(result.left.right).toBeNull();
    expect(result.right.val).toBe(9);
    expect(result.right.left.val).toBe(5);
    expect(result.right.right).toBeNull();
  });
});
