const Stack = require("../Stack/stackp");


class QueuWithStack {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
    this.size=0;
  }
  enqueue(value){
    this.stack1.push(value);
    this.size++;
  }
  dequeue(){
    if(this.stack1.size){
      while(this.stack1.size>0){
        this.stack2.push(this.stack1.pop());
      }
    this.size--;
    return this.stack2.pop();
    }
  }
  getSize(){
    return this.size;
  }
  isEmpty(){
    return this.size === 0;
  }

}

module.exports = QueuWithStack;
