const Queue = require("./queueP");

describe("Queue", () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test("should enqueue elements to the queue", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    console.log(queue);
    expect(queue.getSize()).toBe(3);
    queue.print();
  });

  test("should dequeue elements from the queue", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(1);
    expect(queue.getSize()).toBe(2);
    queue.print();
  });

  test("should return the first element of the queue", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.peek()).toBe(1);
    queue.print();
  });

  test("should return true if the queue is empty", () => {
    expect(queue.isEmpty()).toBe(true);

    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);
    queue.print();
  });

  test("should return the getSize of the queue", () => {
    expect(queue.getSize()).toBe(0);

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.getSize()).toBe(3);
    queue.print();
  });

  test("should clear the queue", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    queue.clear();

    expect(queue.getSize()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
    queue.print();
  });
});
