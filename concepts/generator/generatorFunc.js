function* createFlow() {
  const num = 20;
  const newNum = yield num;
  console.log(newNum);
  yield 5 + newNum;
  yield 6;
}

let gf = createFlow();

console.log(gf.next());
console.log(gf.next(10));
console.log(gf.next());
console.log(gf.next());
