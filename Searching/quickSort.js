function swap(a,b){
  [a,b]=[b,a];
}
function qs(array, lo, hi) {
  if(lo>=hi) return ;
  let pivot = partation(array,lo,hi);
  qs(array,lo,pivot-1);
  qs(array,pivot+1,hi);
}
function partation(array, lo, hi) {
  let pivot = array[hi];
  let idx=lo-1;

  for(let i=lo;i<hi;++i){
    if(array[i]<=pivot){
      idx++;
      [array[i],array[idx]]=[array[idx],array[i]]
      //swap(array[i],array[idx]);
    }
  }
  //swap the pivot 
  idx++;
  [array[idx],array[hi]]=[array[hi],array[idx]];
  //swap(array[idx],array[hi]);
  return idx;
}
function quickSort(array) {
  qs(array, 0, array.length - 1);
}

module.exports = quickSort;
