const isPrime = require("./primeNumber");

test("isPrime should return true for prime number 2", () => {
  expect(isPrime(2)).toBe(true);
});

test("isPrime should return false for non-prime number 4", () => {
  expect(isPrime(4)).toBe(false);
});

test("isPrime should return true for prime number 17", () => {
  expect(isPrime(17)).toBe(true);
});

test("isPrime should return false for non-prime number 15", () => {
  expect(isPrime(15)).toBe(false);
});

test("isPrime should return true for prime number 23", () => {
  expect(isPrime(23)).toBe(true);
});

test("isPrime should return false for non-prime number 10", () => {
  expect(isPrime(10)).toBe(false);
});
