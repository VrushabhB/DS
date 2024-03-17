const findMaxNodeDepth = require("../findMaxNodeDepth");

describe("findMaxNodeDepth", () => {
  test("should return 0 for an empty tree", () => {
    const root = null;
    const result = findMaxNodeDepth(root);
    expect(result).toBe(0);
  });

  test("should return 1 for a tree with only one node", () => {
    const root = { val: 1, left: null, right: null };
    const result = findMaxNodeDepth(root);
    expect(result).toBe(1);
  });

  test("should return the maximum depth for a balanced binary tree", () => {
    const root = {
      val: 1,
      left: {
        val: 2,
        left: { val: 4, left: null, right: null },
        right: { val: 5, left: null, right: null },
      },
      right: {
        val: 3,
        left: { val: 6, left: null, right: null },
        right: { val: 7, left: null, right: null },
      },
    };
    const result = findMaxNodeDepth(root);
    expect(result).toBe(3);
  });

  test("should return the maximum depth for an unbalanced binary tree", () => {
    const root = {
      val: 1,
      left: {
        val: 2,
        left: {
          val: 4,
          left: { val: 8, left: null, right: null },
          right: null,
        },
        right: null,
      },
      right: null,
    };
    const result = findMaxNodeDepth(root);
    expect(result).toBe(4);
  });
});
