function wordBreak(s, wordDict) {
  const wordSet = new Set(wordDict);
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  dp;
  return dp[s.length];
}
wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]);
// wordBreak("leetcode", ["leet", "code"]);
module.exports = wordBreak;
