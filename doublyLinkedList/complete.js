class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Add a node to the end of the list
  append(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  // Add a node to the beginning of the list
  prepend(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.size++;
  }

  // Insert a node at a specific position
  insertAt(data, position) {
    if (position < 0 || position > this.size) {
      throw new Error("Invalid position");
    }

    const newNode = new Node(data);

    if (position === 0) {
      this.prepend(data);
    } else if (position === this.size) {
      this.append(data);
    } else {
      let current = this.head;
      let count = 0;

      while (count < position) {
        current = current.next;
        count++;
      }

      newNode.prev = current.prev;
      newNode.next = current;
      current.prev.next = newNode;
      current.prev = newNode;

      this.size++;
    }
  }

  // Remove a node from the list
  remove(data) {
    let current = this.head;

    while (current !== null) {
      if (current.data === data) {
        if (current === this.head) {
          this.head = current.next;
          if (this.head !== null) {
            this.head.prev = null;
          }
        } else if (current === this.tail) {
          this.tail = current.prev;
          if (this.tail !== null) {
            this.tail.next = null;
          }
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }

        this.size--;
        return;
      }

      current = current.next;
    }
  }

  // Get the size of the list
  getSize() {
    return this.size;
  }

  // Check if the list is empty
  isEmpty() {
    return this.size === 0;
  }

  // Print the list
  printList() {
    let current = this.head;
    let result = "";

    while (current !== null) {
      result += current.data + " ";
      current = current.next;
    }

    console.log(result.trim());
  }
}

module.exports = DoublyLinkedList;
