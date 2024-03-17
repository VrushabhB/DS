const lengthOfLongestSubstring = require("./index");

test("Empty string should return 0", () => {
  expect(lengthOfLongestSubstring("")).toBe(0);
});

test("String with all unique characters should return the length of the string", () => {
  expect(lengthOfLongestSubstring("abcdefg")).toBe(7);
});

test("String with repeating characters should return the length of the longest substring without repeating characters", () => {
  expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
});

test("String with one character should return 1", () => {
  expect(lengthOfLongestSubstring("a")).toBe(1);
});

test("String with all repeating characters should return 1", () => {
  expect(lengthOfLongestSubstring("bbbbbb")).toBe(1);
});
