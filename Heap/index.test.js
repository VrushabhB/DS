const MinHeap = require('../Heap/index');
describe("MinHeap", () => {
  let minHeap;

  beforeEach(() => {
    minHeap = new MinHeap();
  });

  it("should add items to the heap", () => {
    minHeap.add(5);
    minHeap.add(3);
    minHeap.add(7);
    assert.deepStrictEqual(minHeap.heap, [3, 5, 7]);
  });

  it("should return the minimum item from the heap without removing it", () => {
    minHeap.add(5);
    minHeap.add(3);
    minHeap.add(7);
    assert.strictEqual(minHeap.peek(), 3);
    assert.deepStrictEqual(minHeap.heap, [3, 5, 7]);
  });

  it("should remove and return the minimum item from the heap", () => {
    minHeap.add(5);
    minHeap.add(3);
    minHeap.add(7);
    assert.strictEqual(minHeap.poll(), 3);
    assert.deepStrictEqual(minHeap.heap, [5, 7]);
  });

  it("should heapify up when adding items to the heap", () => {
    minHeap.add(5);
    minHeap.add(3);
    minHeap.add(7);
    minHeap.add(2);
    assert.deepStrictEqual(minHeap.heap, [2, 3, 7, 5]);
  });

  it("should heapify down when removing items from the heap", () => {
    minHeap.add(5);
    minHeap.add(3);
    minHeap.add(7);
    minHeap.add(2);
    minHeap.poll();
    assert.deepStrictEqual(minHeap.heap, [3, 5, 7]);
  });

  it("should return the correct left child index", () => {
    assert.strictEqual(minHeap.getLeftChildIndex(0), 1);
    assert.strictEqual(minHeap.getLeftChildIndex(1), 3);
    assert.strictEqual(minHeap.getLeftChildIndex(2), 5);
  });

  it("should return the correct right child index", () => {
    assert.strictEqual(minHeap.getRightChildIndex(0), 2);
    assert.strictEqual(minHeap.getRightChildIndex(1), 4);
    assert.strictEqual(minHeap.getRightChildIndex(2), 6);
  });

  it("should return the correct parent index", () => {
    assert.strictEqual(minHeap.getParentIndex(1), 0);
    assert.strictEqual(minHeap.getParentIndex(3), 1);
    assert.strictEqual(minHeap.getParentIndex(5), 2);
  });

  it("should check if a node has a left child", () => {
    assert.strictEqual(minHeap.hasLeftChild(0), true);
    assert.strictEqual(minHeap.hasLeftChild(1), true);
    assert.strictEqual(minHeap.hasLeftChild(2), false);
  });

  it("should check if a node has a right child", () => {
    assert.strictEqual(minHeap.hasRightChild(0), true);
    assert.strictEqual(minHeap.hasRightChild(1), true);
    assert.strictEqual(minHeap.hasRightChild(2), false);
  });

  it("should check if a node has a parent", () => {
    assert.strictEqual(minHeap.hasParent(0), false);
    assert.strictEqual(minHeap.hasParent(1), true);
    assert.strictEqual(minHeap.hasParent(2), true);
  });

  it("should return the correct left child", () => {
    minHeap.add(5);
    minHeap.add(3);
    minHeap.add(7);
    assert.strictEqual(minHeap.leftChild(0), 3);
    assert.strictEqual(minHeap.leftChild(1), 7);
  });

  it("should return the correct right child", () => {
    minHeap.add(5);
    minHeap.add(3);
    minHeap.add(7);
    assert.strictEqual(minHeap.rightChild(0), 5);
    assert.strictEqual(minHeap.rightChild(1), undefined);
  });

  it("should return the correct parent", () => {
    minHeap.add(5);
    minHeap.add(3);
    minHeap.add(7);
    assert.strictEqual(minHeap.parent(1), 5);
    assert.strictEqual(minHeap.parent(2), 5);
  });

  it("should swap two items in the heap", () => {
    minHeap.add(5);
    minHeap.add(3);
    minHeap.add(7);
    minHeap.swap(0, 2);
    assert.deepStrictEqual(minHeap.heap, [7, 5, 3]);
  });
});
