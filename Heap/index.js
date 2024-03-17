class MinHeap{
  constructor(){
    this.data = [];
    this.length = 0;
  }
  add(value){
    this.data[this.length] = value;
    this.heapifyUp(this.length++);
  }
  poll(){
    if(!this.length) return null;
    let out = this.data[this.length];

    this.length--;
    if(this.length === 0){
      this.data=[];
      return out;
    }
    this.data[0] = this.data[this.length];
    this.heapifyDown(0);
    return out;
  }
  heapifyUp(index){
    if(index===0){
      return;
    }
    const p = this.parent(index);
    const pv = this.data[p];
    const v = this.data[index];
    if(pv>v){
      this.data[index] = pv;
      this.data[p] = v;
      this.heapifyUp(p);
    }
  }
  heapifyDown(index){
    const lIndex = this.leftChild(index);
    const rIndex = this.rightChild(index);
    if(index>= this.length || lIndex>=this.length){
      return ;
    }
    const v = this.data[index];
    const lv = this.data[lIndex]; 
    const rv = this.data[rIndex];
    
    if(lv > rv && v > rv){
      this.data[index] = rv;
      this.data[rIndex] = v;
      this.heapifyDown(rIndex);
    } else if(rv > lv && v > lv){
      this.data[index] = lv;
      this.data[lIndex] = v;
      this.heapifyDown(lIndex);
    }

  }
  parent(index){
    return ((index-1)/2);
  }
  leftchild(index){
    return index*2+1
  }
  rightChild(index){
    return index*2+2;
  }
}

module.exports = MinHeap;
