function useCache(cb){
  let cache = new Map();
  return function (...args){
    let key = JSON.stringify(args);
    if(cache.has(key)){
      console.log("cahce hit");
      return cache.get(key);
    }else{
      console.log("Cahce miss");
      let result = cb.apply(this,[...args]);
      cache.set(key,result);
    }
  }
}

const multiply=(a,b)=>{
  let result=[];
  for(let i=0;i<1000000;++i){
    result.unshift(i);
  }
  return a*b;
}

let cachedMultiply = useCache(multiply);


cachedMultiply(10,20);
cachedMultiply(10,20);
