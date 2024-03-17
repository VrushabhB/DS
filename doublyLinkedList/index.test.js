const DoublyLinkedList = require("./index");

// Test case for prepend method
test("prepend method should add a node to the beginning of the list", () => {
  const list = new DoublyLinkedList();
  list.prepend(1);
  list.prepend(2);
  list.prepend(3);
  expect(list.getSize()).toBe(3);
  expect(list.printList()).toBe("3 2 1");
});

// Test case for append method
test("append method should add a node to the end of the list", () => {
  const list = new DoublyLinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  expect(list.getSize()).toBe(3);
  expect(list.printList()).toBe("1 2 3");
});

// Test case for insertAt method
test("insertAt method should insert a node at a specific position", () => {
  const list = new DoublyLinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  list.insertAt(4, 1);
  expect(list.getSize()).toBe(4);
  expect(list.printList()).toBe("1 4 2 3");
});

// Test case for remove method
test("remove method should remove a node from the list", () => {
  const list = new DoublyLinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  list.remove(2);
  expect(list.getSize()).toBe(2);
  expect(list.printList()).toBe("1 3");
});

// Test case for getSize method
test("getSize method should return the size of the list", () => {
  const list = new DoublyLinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  expect(list.getSize()).toBe(3);
});

// Test case for isEmpty method
test("isEmpty method should return true if the list is empty", () => {
  const list = new DoublyLinkedList();
  expect(list.isEmpty()).toBe(true);
});

// Test case for printList method
test("printList method should return a string representation of the list", () => {
  const list = new DoublyLinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  expect(list.printList()).toBe("1 2 3");
});
