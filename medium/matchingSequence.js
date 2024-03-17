/**
 * 792. Number of Matching Subsequences
Given a string s and an array of strings words, return the number of words[i] that is a subsequence of s.
A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted 
without changing the relative order of the remaining characters.
For example, "ace" is a subsequence of "abcde".

Example 1:
Input: s = "abcde", words = ["a","bb","acd","ace"]
Output: 3
Explanation: There are three strings in words that are a subsequence of s: "a", "acd", "ace".
Example 2:
Input: s = "dsahjpjauf", words = ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"]
Output: 2
*/

function numMatchingSubseq(s, words) {
  let counter = 0;
  for (let word of words) {
    let i = 0;
    for (let c of s) {
      if (i < word.length && word[i] === c) {
        i++;
      }
    }
    if (i === word.length) {
      counter++;
    }
  }
  return counter;
}

module.exports = numMatchingSubseq;
const s = "dsahjpjauf";
const words = ["ahjpjau", "ja", "ahbwzgqnuk", "tnmlanowax"];
const result = numMatchingSubseq(s, words);
console.log("result", result);
