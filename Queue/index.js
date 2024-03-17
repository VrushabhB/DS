class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  enqueue(item) {
    let newNode = new Node(item);
    this.size++;
    if (!this.tail) {
      this.head = this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }

  dequeue() {
    if(!this.head){
      return null;
    }
    let current = this.head;
    this.head = current.next;
    current.next =null;
    this.size--;
    return current.value;
  }

  peek() {
    return this.head?.value;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
  print(){
    let current = this.head;
    let str = "";
    while(current){
      str +=`${current.value} ==> `;
      current = current.next;
    }
    str += "null";
    console.log(str);
  }
  clear(){
    this.head = this.tail = null;
    this.size = 0;
  }
}
let queue = new Queue();

queue.enqueue(10);
queue.enqueue(10);
queue.enqueue(10);
console.log(queue.getSize());
module.exports = Queue;
