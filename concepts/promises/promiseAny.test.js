const assert = require("assert");
const promiseAny = require("./promiseAny");

describe("promiseAny", () => {
  it("should resolve with the first resolved promise", async () => {
    const promises = [
      Promise.reject("Error 1"),
      Promise.resolve("Success 1"),
      Promise.reject("Error 2"),
      Promise.resolve("Success 2"),
    ];

    const result = await promiseAny(promises);
    assert.strictEqual(result, "Success 1");
  });

  it("should reject with an AggregateError if all promises are rejected", async () => {
    const promises = [
      Promise.reject("Error 1"),
      Promise.reject("Error 2"),
      Promise.reject("Error 3"),
    ];

    try {
      await promiseAny(promises);
      assert.fail("Expected promise to reject");
    } catch (error) {
      assert.strictEqual(error.name, "AggregateError");
      assert.deepStrictEqual(error.errors, ["Error 1", "Error 2", "Error 3"]);
      assert.strictEqual(error.message, "All promises were rejected");
    }
  });

  it("should resolve with the first resolved promise even if other promises are still pending", async () => {
    const promises = [
      new Promise((resolve) => setTimeout(resolve, 1000, "Delayed Success")),
      Promise.reject("Error 1"),
      Promise.resolve("Success 1"),
    ];

    const result = await promiseAny(promises);
    assert.strictEqual(result, "Success 1");
  });
});
