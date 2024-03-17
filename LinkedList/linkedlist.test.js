const LinkedList = require("./SinglyList");

describe("LinkedList", () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  test("append should add a node to the end of the linked list", () => {
    linkedList.append(10);
    linkedList.append(20);
    linkedList.append(30);

    expect(linkedList.getSize()).toBe(3);
    expect(linkedList.getAt(1)).toBe(20);
    expect(linkedList.isEmpty()).toBe(false);
    linkedList.print(); // Output: 10 -> 20 -> 30 -> null
  });
  test("prepend should add a node to the begining of the linked list", () => {
    linkedList.prepend(10);
    linkedList.prepend(20);
    linkedList.prepend(30);

    expect(linkedList.getSize()).toBe(3);
    expect(linkedList.isEmpty()).toBe(false);
    expect(linkedList.getAt(1)).toBe(20);
    linkedList.print(); // Output: 10 -> 20 -> 30 -> null
  });

  test("insertAt should insert a node at a specific position in the linked list", () => {
    linkedList.append(10);
    linkedList.append(20);
    linkedList.append(30);
    linkedList.insertAt(15, 1);
    expect(linkedList.getSize()).toBe(4);
    expect(linkedList.isEmpty()).toBe(false);
    linkedList.print(); // Output: 10 -> 15 -> 20 -> 30 -> null
  });

  test("removeAt should remove a node at a specific position in the linked list", () => {
    linkedList.append(10);
    linkedList.append(20);
    linkedList.append(30);
    linkedList.removeAt(2);

    expect(linkedList.getSize()).toBe(2);
    expect(linkedList.isEmpty()).toBe(false);
    linkedList.print(); // Output: 10 -> 20 -> null
  });

  test("getSize should return the size of the linked list", () => {
    linkedList.append(10);
    linkedList.append(20);
    linkedList.append(30);

    expect(linkedList.getSize()).toBe(3);
  });

  test("isEmpty should return true if the linked list is empty", () => {
    expect(linkedList.isEmpty()).toBe(true);

    linkedList.append(10);

    expect(linkedList.isEmpty()).toBe(false);
  });
  test("findMiddleNode should return the middle node of the linked list", () => {
    linkedList.append(10);
    linkedList.append(20);
    linkedList.append(30);
    linkedList.append(40);
    linkedList.append(50);

    const middleNode = linkedList.findMiddleNode();

    expect(middleNode).toBe(30);
    linkedList.print();
  });
  test("reverseLinkedList should reverse the linked list", () => {
    linkedList.append(10);
    linkedList.append(20);
    linkedList.append(30);
    linkedList.append(40);
    linkedList.append(50);

    linkedList.reverseLinkedList();

    expect(linkedList.getSize()).toBe(5);
    expect(linkedList.getAt(0)).toBe(50);
    expect(linkedList.getAt(1)).toBe(40);
    expect(linkedList.getAt(2)).toBe(30);
    expect(linkedList.getAt(3)).toBe(20);
    expect(linkedList.getAt(4)).toBe(10);
    linkedList.print(); // Output: 50 -> 40 -> 30 -> 20 -> 10 -> null
  });
  test("removeNthNodeFromEnd should remove the nth node from the end of the linked list", () => {
    linkedList.append(10);
    linkedList.append(20);
    linkedList.append(30);
    linkedList.append(40);
    linkedList.append(50);

    linkedList.removeNthNodeFromEnd(2);
    expect(linkedList.getSize()).toBe(4);
    expect(linkedList.getAt(3)).toBe(30);
    linkedList.print(); // Output: 10 -> 20 -> 30 -> 40 -> null

    linkedList.removeNthNodeFromEnd(4);
    expect(linkedList.getSize()).toBe(3);
    expect(linkedList.getAt(2)).toBe(30);
    linkedList.print(); // Output: 10 -> 20 -> 30 -> null

    linkedList.removeNthNodeFromEnd(1);
    expect(linkedList.getSize()).toBe(2);
    expect(linkedList.getAt(1)).toBe(20);
    linkedList.print(); // Output: 10 -> 20 -> null
  });
});
