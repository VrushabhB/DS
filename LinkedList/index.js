class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
    this.tail = null;
  }

  // Add a node to the end of the linked list
  append(data) {
    let node = new Node(data);
    if (this.isEmpty()) {
      this.head = this.tail = node;
      this.size++;
      return;
    }

    this.tail.next = node;
    this.tail = node;
    this.size++;
  }

  // Add a node to the beginning of the linked list
  prepend(data) {
    let newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = this.tail = newNode;
      this.size++;
      return this.head.value;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
    return this.head.value;
  }

  // Insert a node at a specific position in the linked list
  insertAt(data, position) {
    if (position < 0 || position > this.size) {
      throw new Error("Invalid position");
    }

    let newNode = new Node(data);

    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let prev = null;
      let count = 0;

      while (count < position) {
        prev = current;
        current = current.next;
        count++;
      }

      prev.next = newNode;
      newNode.next = current;
    }

    if (position === this.size) {
      this.tail = newNode;
    }

    this.size++;
  }

  // Remove a node at a specific position in the linked list
  removeAt(position) {
    let count = 0;
    if (position > this.size || position <= 0) {
      throw new Error("Inavalid position");
    }
    let current = this.head;
    let prev = null;
    while (count < position) {
      prev = current;
      current = current.next;
      count++;
    }
    prev.next = current.next;
    if (this.size === position) {
      this.tail = null;
    }
    this.size--;
  }

  // Get the size of the linked list
  getSize() {
    return this.size;
  }

  // Get the node at a specific position in the linked list
  getAt(position) {
    if (position > this.size) {
      throw Error("Out of range");
    }
    if (position === 0) {
      return this.head.value;
    }
    let current = this.head;
    while (position > 0) {
      current = current.next;
      position--;
    }
    return current.value;
  }
  // Check if the linked list is empty
  isEmpty() {
    return this.size === 0;
  }
  // find middle node
  findMiddleNode() {
    let fast = this.head;
    let slow = this.head;

    while (fast.next) {
      fast = fast.next?.next;
      slow = slow.next;
    }
    return slow.value;
  }
  // Reverse the linked list
  reverseLinkedList() {
    let current = this.head;
    let next = null;
    let prev = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = this.tail;
    this.tail = prev;
  }
  checkForCycle(root) {
    if (!root) throw new Error("List is empty");
    let slow = root;
    let fast = root.next;
    while (slow !== fast) {
      if (!fast || !fast.next) {
        return false;
      }
      slow = slow.next;
      fast = fast.next.next;
    }
    return true;
  }
  createCycle() {
    this.tail.next = this.head;
  }
  // Print the linked list
  print() {
    let current = this.head;
    let str = "";
    while (current) {
      str += `${current?.value} ===> `;
      current = current.next;
    }
    str += "null";
    console.log(str);
  }
}

let lili = new LinkedList();
lili.append(10);
lili.append(20);
lili.append(30);
lili.getAt(1);
module.exports = LinkedList;
