//scopes and closure
function createCounter() {
  let globalCount = 0;

  function incrementCount() {
    let incrementedValue = ++globalCount;
    return incrementedValue;
  }

  return { incrementCount };
}

const counter = createCounter();

console.log(counter.incrementCount());
console.log(counter.incrementCount());
console.log(createCounter().incrementCount());

function createUserManager() {
  let user = null;

  return function (name) {
    "use strict";
    user = { name, createdAt: Date.now() };
    return user;
  };
}

const createUser = createUserManager();
createUser("John Doe") === createUser("John Doe");

function createCounter1(initialCount) {
  let count = initialCount;
  return function () {
    "use strict";
    count += 1;
    return count;
  };
}

const counter1 = createCounter1(10);
counter1();
counter1();
console.log(counter1());

const input = prompt("What fruit do you like most?");
const css = "color: #FFFFFF;";

switch (input) {
  case "orange":
    const css = "color: #FFA500;";
    console.log("%cOrange!", css);
    break;
  case "lemon":
    const css = "color: #FFFF00;";
    console.log("%cYellow!", css);
    break;
  default:
    console.log("No color for you");
}

/// this key word
function logThis() {
  console.log(this);
}

const obj = {
  logThis,
  logThis2() {
    return logThis();
  },
  logThis3() {
    return obj.logThis();
  },
};

obj.logThis();
obj.logThis2();
obj.logThis3();

const objA = {
  foo() {
    console.log(this);
  },
  bar: () => console.log(this),
};

const objB = {
  foo: objA.foo,
  bar: () => objA.bar(),
  baz() {
    objA.foo();
  },
};

objB.foo();
objB.bar();
objB.baz();

function logThis() {
  console.log(this);
}

const obj1 = {
  foo: logThis,
  bar: () => logThis(),
  baz() {
    logThis();
  },
  qux() {
    logThis.call(this);
  },
};

const obj2 = { ...obj1, foo2: () => obj1.foo() };

for (const key in obj2) {
  obj2[key]();
}

const obj = {
  logThis() {
    console.log(this);
  },
  logThis2() {
    function logThisInner() {
      console.log(this);
    }
    return logThisInner.apply(this);
  },
};

const { logThis, logThis2 } = obj;

logThis();
logThis2();
obj.logThis();
obj.logThis2();
////
// ! garbase collection
// When will the `inner` function be garbage collected?

function outer() {
  return function inner() {
    console.log("Inner function");
  };
}

const outerFunction = outer();
// By invoking outerFunction
// By explicitly setting outerFunction to null
// It is automatically garbage collected right after outer is called
// It depends on the JavaScript engine's garbage collection strategy

// Which statements are true regarding this code snippet?

let obj = { a: { b: 1 } };
let ref = obj.a;
obj = null;
// The object { b: 1 } will be garbage collected
// ref still references { b: 1 }, so it won’t be garbage collected
// The entire obj object is retained in memory due to the reference in ref
// Setting obj to null frees all memory associated with it

const obj = {
  bar() {
    console.log(this);
  },
};

setTimeout(() => obj.bar(), 0);

queueMicrotask(() => delete obj.bar);
//   obj
//   window
//   setTimeout
//   undefined
//   TypeError
