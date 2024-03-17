const numMatchingSubseq = require("../matchingSequence");

test("Example 1: Matching Subsequences", () => {
  const s = "abcde";
  const words = ["a", "bb", "acd", "ace"];
  const result = numMatchingSubseq(s, words);
  expect(result).toBe(3);
});

test("Example 2: Matching Subsequences", () => {
  const s = "dsahjpjauf";
  const words = ["ahjpjau", "ja", "ahbwzgqnuk", "tnmlanowax"];
  const result = numMatchingSubseq(s, words);
  expect(result).toBe(2);
});

test("Empty String: No Matching Subsequences", () => {
  const s = "";
  const words = ["a", "bb", "acd", "ace"];
  const result = numMatchingSubseq(s, words);
  expect(result).toBe(0);
});

test("Empty Words Array: No Matching Subsequences", () => {
  const s = "abcde";
  const words = [];
  const result = numMatchingSubseq(s, words);
  expect(result).toBe(0);
});

test("No Matching Subsequences", () => {
  const s = "abcde";
  const words = ["xyz", "123", "def"];
  const result = numMatchingSubseq(s, words);
  expect(result).toBe(0);
});
