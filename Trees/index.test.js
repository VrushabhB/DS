const assert = require("assert");
const Tree = require("./index");

describe("Tree", () => {
  let tree;

  beforeEach(() => {
    tree = new Tree();
  });

  it("should insert a node into the tree", () => {
    tree.insert(5);
    assert.strictEqual(tree.root.value, 5);
  });

  it("should insert multiple nodes into the tree", () => {
    tree.insert(5);
    tree.insert(3);
    tree.insert(7);
    assert.strictEqual(tree.root.value, 5);
    assert.strictEqual(tree.root.left.value, 3);
    assert.strictEqual(tree.root.right.value, 7);
  });

  it("should search for a value in the tree and return true if found", () => {
    tree.insert(5);
    tree.insert(3);
    tree.insert(7);
    assert.strictEqual(tree.search(5), true);
    assert.strictEqual(tree.search(3), true);
    assert.strictEqual(tree.search(7), true);
  });

  it("should search for a value in the tree and return false if not found", () => {
    tree.insert(5);
    tree.insert(3);
    tree.insert(7);
    assert.strictEqual(tree.search(2), false);
    assert.strictEqual(tree.search(4), false);
    assert.strictEqual(tree.search(6), false);
  });

  it("should remove a node from the tree", () => {
    tree.insert(5);
    tree.insert(3);
    tree.insert(7);
    tree.remove(3);
    assert.strictEqual(tree.root.left, null);
  });

  it("should perform depth-first traversal of the tree", () => {
    tree.insert(5);
    tree.insert(3);
    tree.insert(7);
    tree.insert(2);
    tree.insert(4);
    tree.insert(6);
    tree.insert(8);
    const expectedOutput = [5, 3, 2, 4, 7, 6, 8];
    const output = [];
    const consoleLog = console.log;
    console.log = (value) => output.push(value);
    tree.dfsTraversal(tree.root);
    console.log = consoleLog;
    assert.deepStrictEqual(output, expectedOutput);
  });
});
