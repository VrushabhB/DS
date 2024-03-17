class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const poppedNode = this.top;
    this.top = this.top.next;
    this.size--;
    return poppedNode.data;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.top.data;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}

// Usage example:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek()); // Output: 30
console.log(stack.pop()); // Output: 30
console.log(stack.getSize()); // Output: 2
console.log(stack.isEmpty()); // Output: false
