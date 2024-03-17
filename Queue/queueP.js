class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  enqueue(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = this.tail = node;
      this.size++;
      return;
    }
    this.tail.next = node;
    this.tail = node;
    this.size++;
  }
  dequeue() {
    if(!this.head){
      this.size--;
      return null;
    }
    let current= this.head;
    this.head  = current.next;
    this.size--;
    return current.value;
  }
  getSize() {
    return this.size;
  }
  peek(){
    return this.head.value;
  }
  isEmpty(){
    return this.size === 0;
  }
  clear(){
    this.head = this.tail =null;
    this.size=0;
  }
  print() {
    let current = this.head;
    let str = "";
    while (current) {
      str += current.value + "====>";
      current = current.next;
    }
    str += "null";
    console.log(str);
  }
}

module.exports = Queue;
