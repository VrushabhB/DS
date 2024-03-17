/**
 * Longest Substring Without Repeating Characters
 * !Medium
 * Given a string s, find the length of the longest
 * substring without repeating characters.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let n = s.length;
  let set = new Set();
  let i = 0,
    j = 0,
    ans = 0;
  while (i < n && j < n) {
    if (!set.has(s.charAt(j))) {
      set.add(s.charAt(j++));
      ans = Math.max(ans, j - i);
    } else {
      set.delete(s.charAt(i++));
    }
  }
  return ans;
};
lengthOfLongestSubstring("pwwkew");
module.exports = lengthOfLongestSubstring;
