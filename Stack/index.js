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
    let node = new Node(data);
    this.size++;
    if(!this.top) {
      this.top = node;
      return;
    }
    node.next=this.top;
    this.top = node;
  }

  pop() {
    if(this.isEmpty()){
      throw new Error("Stack is empty");
    }
    // this.size = Math.max(0,this.size--);

    this.size--;
    let current = this.top;
    this.top = this.top?.next;
    return current.data;
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

  print() {
    let current = this.top;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
  clear(){
    this.size = 0;
    this.top = null;
  }
}

module.exports = Stack
