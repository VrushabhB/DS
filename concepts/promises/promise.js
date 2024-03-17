const res = fetch("https://jsonplaceholder.typicode.com/todos/1");

res.then((value) => value.json()).then((res) => console.log(res));
setImmediate(() => {
  console.log("run immidiately");
});
setTimeout(() => {
  console.log("inside timer");
}, 0);

console.log("First console log");
