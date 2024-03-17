const assert = require("assert");
const promiseAll = require("../../concepts/promisesAll");

describe("promiseAll", () => {
  it("should resolve with an empty array if no promises are provided", async () => {
    const result = await promiseAll([]);
    assert.deepStrictEqual(result, []);
  });

  it("should resolve with an array of resolved values when all promises are resolved", async () => {
    const promises = [
      Promise.resolve(1),
      Promise.resolve(2),
      Promise.resolve(3),
    ];
    const result = await promiseAll(promises);
    assert.deepStrictEqual(result, [1, 2, 3]);
  });

  it("should reject with the first encountered error if any promise is rejected", async () => {
    const promises = [
      Promise.resolve(1),
      Promise.reject(new Error("Promise rejected")),
      Promise.resolve(3),
    ];
    try {
      await promiseAll(promises);
      assert.fail("Expected promiseAll to reject");
    } catch (error) {
      assert.strictEqual(error.message, "Promise rejected");
    }
  });

  it("should reject with a TypeError if the argument is not an array", async () => {
    const promise = Promise.resolve(1);
    try {
      await promiseAll(promise);
      assert.fail("Expected promiseAll to reject");
    } catch (error) {
      assert.strictEqual(error instanceof TypeError, true);
      assert.strictEqual(error.message, "Argument must be an array");
    }
  });
});
