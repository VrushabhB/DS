class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  prepend(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  insertAfter(data, target) {
    const newNode = new Node(data);
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.data === target) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        if (currentNode === this.tail) {
          this.tail = newNode;
        }
        break;
      }
      currentNode = currentNode.next;
    }
  }

  delete(data) {
    if (!this.head) {
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      return;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.data === data) {
        currentNode.next = currentNode.next.next;
        if (currentNode.next === null) {
          this.tail = currentNode;
        }
        break;
      }
      currentNode = currentNode.next;
    }
  }

  reverseLinkedList() {
    if (!this.head || !this.head.next) {
      return;
    }

    let current = this.head;
    let prev = null;
    let next = null;

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
    if (!fast) {
      this.head = this.head.next;
      return;
    }
    while (fast.next) {
      fast = fast.next;
      slow = slow.next;
    }
    slow.next = slow.next.next;
  }
  print() {
    let currentNode = this.head;
    let output = "";

    while (currentNode) {
      output += currentNode.data + " -> ";
      currentNode = currentNode.next;
    }

    output += "null";
    console.log(output);
  }
}

// Usage example:
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.insertAfter(2.5, 2);
list.delete(1);
list.print();
