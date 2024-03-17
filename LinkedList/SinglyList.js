class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
    this.tail = null;
  }
}

class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }
  append(data) {
    let node = new Node(data);
    if (!this.head) {
      this.head = this.tail = node;
      this.size++;
      return;
    }
    this.tail.next = node;
    this.tail = node;
    this.size++;
  }
  prepend(data) {
    let node = new Node(data);
    if (!this.head) {
      this.head = this.tail = node;
      this.size++;
      return;
    }
    node.next = this.head;
    this.head = node;
    this.size++;
  }
  insertAt(data, position) {
    let node = new Node(data);
    let current = this.head;
    let prev = null;
    while (position > 0) {
      prev = current;
      current = current.next;
      position--;
    }
    node.next = current;
    prev.next = node;
    this.size++;
  }
  removeAt(position) {
    if (this.isEmpty()) return null;
    let current = this.head;
    while (position > 0) {
      current = current.next;
      position--;
    }
    current = current.next?.next;
    this.size--;
  }
  getSize() {
    return this.size;
  }
  isEmpty() {
    return this.size === 0;
  }
  getAt(position) {
    if (position === this.size) {
      return this.tail.value;
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

  findMiddleNode() {
    let slow = this.head;
    let fast = this.head;
    while (fast.next) {
      slow = slow.next;
      fast = fast.next?.next;
    }
    return slow.value;
  }
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

  removeNthNodeFromEnd(n) {
    let fast = this.head;
    let slow = this.head;
    while (n > 0) {
      fast = fast.next;
      n--;
    }

    while (fast) {
      fast = fast.next;
      slow = slow.next;
    }

    slow.next = slow.next.next;
    this.size--;
  }
  print() {
    let current = this.head;
    let llstr = "";
    while (current) {
      llstr += current.value + "===>";
      current = current.next;
    }
    llstr += "null";
    console.log(llstr);
  }
}
let lili = new LinkedList();
lili.append(10);
lili.append(20);
lili.append(30);
lili.getAt(1);
module.exports = LinkedList;
