class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
    this.tail = null;
  }
  // Add a node to the beginning of the list
  prepend(data) {
    let node = new Node(data);
    if (this.isEmpty()) {
      this.head = this.tail = node;
      this.size++;
      return;
    }
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    this.size++;
  }

  // Add a node to the end of the list
  append(data) {
    let node = new Node(data);
    if (this.isEmpty()) {
      this.head = this.tail = node;
      this.size++;
      return;
    }
    node.prev = this.tail;
    this.tail.next = node;

    this.tail = node;

    this.size++;
  }

  // Insert a node at a specific position
  insertAt(data, position) {
    if (position > this.size) {
      throw new Error("Out of range");
    }
    if (position == 0) {
      this.prepend(data);
      return;
    }
    if (position === this.size) {
      this.append(data);
      return;
    }
    const node = new Node(data);
    let count = 0;
    let current = this.head;
    while (count < position) {
      current = current.next;
      count++;
    }
    node.next = current;
    node.prev = current.prev;
    current.prev.next = node;
    this.size++;

    this.printList();
  }

  // Remove a node from the list
  remove(data) {
    if (this.isEmpty()) {
      throw new Error("Can't remove from empty list");
    }
   if (this.size === 0) {
      this.head = this.tail = null;
      return null;
    }
    let current = this.head;
    while (current.value !== data) {
      current = current.next;
    }
    //if (!current) return;
    if (current.prev) {
      current.prev.next = current.next;
    }
    if (current.next) {
      current.next.prev = current.prev;
    }
    if (current === this.head) {
      this.head = current.next;
    }
    if (current === this.tail) {
      this.tail = current.prev;
    }
    current.prev = current.next = null;
    
     this.size--;
    return current.value;
  
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
    let str = "";
    while (current) {
      str += current.value + " ";
      current = current.next;
    }
   str = str.trim();
    console.log(str);
    return str;
  }
}

module.exports = DoublyLinkedList;
