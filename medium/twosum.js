function twoSum(array,target){
  let map = new Map();
  for(let i=0;i<array.length;++i){
    let diff = target-array[i];
    if(map.has(diff)){
      return [map.get(diff),i];
    }else{
      map.set(array[i],i);
    }
  }
  return [];
}
module.exports = twoSum;
