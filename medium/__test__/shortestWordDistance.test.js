const shortestDistance = require("../shortestWordDistance");

test("shortestDistance should return the correct shortest distance between two words in the list", () => {
  const words = ["practice", "makes", "perfect", "coding", "makes"];

  // Test case 1: word1 = "coding", word2 = "practice"
  expect(shortestDistance(words, "coding", "practice")).toBe(3);

  // Test case 2: word1 = "makes", word2 = "coding"
  expect(shortestDistance(words, "makes", "coding")).toBe(1);
});

test("shortestDistance should return 0 when word1 and word2 are the same", () => {
  const words = ["practice", "makes", "perfect", "coding", "makes"];

  // Test case 3: word1 = "makes", word2 = "makes"
  expect(shortestDistance(words, "makes", "makes")).toBe(0);
});

test.skip("shortestDistance should return -1 when either word1 or word2 is not present in the list", () => {
  const words = ["practice", "makes", "perfect", "coding", "makes"];

  // Test case 4: word1 = "hello", word2 = "coding"
  expect(shortestDistance(words, "hello", "coding")).toBe(-1);

  // Test case 5: word1 = "practice", word2 = "world"
  expect(shortestDistance(words, "practice", "world")).toBe(-1);
});
