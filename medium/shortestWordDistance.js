/**
 * Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

Example:
Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

Input: word1 = “coding”, word2 = “practice”
Output: 3
Input: word1 = "makes", word2 = "coding"
Output: 1
*/

function shortestDistance(array, w1, w2) {
  let indexMap = new Map();
  for (let index = 0; index < array.length; ++index) {
    indexMap.set(array[index], index);
  }
  return indexMap.get(w1) - indexMap.get(w2);
}

module.exports = shortestDistance;
