function doWhenDataReceived(value){
  returnNextelement.next(value.json());
}

function* createFlow(){
  const data = yield fetch('https://jsonplaceholder.typicode.com/posts/1');
  console.log(data);
}

const returnNextelement = createFlow();
const futureData = returnNextelement.next();
console.log(futureData);
futureData.value.then(doWhenDataReceived);
