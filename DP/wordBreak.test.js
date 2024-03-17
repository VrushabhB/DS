const wordBreak = require("./wordBreak");

test("wordBreak should return true for string 'leetcode' and word dictionary ['leet', 'code']", () => {
  expect(wordBreak("leetcode", ["leet", "code"])).toBe(true);
});

test("wordBreak should return true for string 'applepenapple' and word dictionary ['apple', 'pen']", () => {
  expect(wordBreak("applepenapple", ["apple", "pen"])).toBe(true);
});

test("wordBreak should return false for string 'catsandog' and word dictionary ['cats', 'dog', 'sand', 'and', 'cat']", () => {
  expect(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])).toBe(
    false
  );
});

test("wordBreak should return true for string 'aaaaaaa' and word dictionary ['aaa', 'aaaa']", () => {
  expect(wordBreak("aaaaaaa", ["aaa", "aaaa"])).toBe(true);
});

test("wordBreak should return false for string 'applepen' and word dictionary ['apple', 'penapple']", () => {
  expect(wordBreak("applepen", ["apple", "penapple"])).toBe(false);
});
