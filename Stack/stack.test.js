const Stack = require("./stackp");

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("should create an empty stack", () => {
    expect(stack.isEmpty()).toBe(true);
    expect(stack.getSize()).toBe(0);
    stack.print();
  });

  it("should push elements to the stack", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.isEmpty()).toBe(false);
    expect(stack.getSize()).toBe(3);

    stack.print();
  });

  it("should pop elements from the stack", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toBe(3);

    stack.print();
    expect(stack.pop()).toBe(2);

    stack.print();

    expect(stack.pop()).toBe(1);
    expect(stack.isEmpty()).toBe(true);
    expect(stack.getSize()).toBe(0);

    stack.print();
  });

  it("should return the top element without removing it", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.peek()).toBe(3);
    expect(stack.getSize()).toBe(3);
  });

  it("should clear the stack", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.clear();

    expect(stack.isEmpty()).toBe(true);
    expect(stack.getSize()).toBe(0);
  });
});
