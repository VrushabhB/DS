function promiseAll(promises) {
  return new Promise((resolve,reject)=>{
    if(!Array.isArray(promises)) return reject(new TypeError("Argument must be an array"));
    if(!promises.length){
      resolve([]);
    }
  let count = 0;
    let results=[];

  function handlePromises(index,promise){
      promise.then(value=>{
        results[index] = value;
        count++;
        if(count===promises.length){
          resolve(results);
        }

      }).catch(error=>reject(error))
  }

    for(let i=0;i<promises.length;++i){
      handlePromises(i,promises[i]);
    }
    console.log(results);
  });  
}
const promises = [
  Promise.resolve(1),
  Promise.reject(new Error("Promise rejected")),
  Promise.resolve(3),
];
promiseAll(promises).then(result=>{
  console.log(result);
}).catch(error=>console.log(error));

module.exports = promiseAll;
