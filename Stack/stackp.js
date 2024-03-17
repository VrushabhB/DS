class Node{
  constructor(value){
    this.value=value;
    this.next=value;
  }
}

class Stack{
  constructor(){
    this.size = 0;
    this.top=null;
  }
  push(value){
    let node = new Node(value);
    if(!this.top){
      this.top = node;
      this.size++;
      return;
    }
    node.next = this.top;
    this.top = node;
    this.size++;
  }
  peek(){
    return this.top.value;
  }
  pop(){
    if(!this.top){
      return null;
    }
    let current = this.top;
    this.top = this.top.next;
    this.size--;
    return current.value;
  }
  isEmpty(){
    return this.size === 0;
  }
  getSize(){
    return this.size;
  }
  print(){
    let current = this.top;
    let str = '';
    while(current){
      str+=current.value + "\n";
      current = current.next;
    }
    str+='\n';
    console.log(str);
  }
  clear(){
    this.top =null;
    this.size = 0;
  }
}

module.exports = Stack;
