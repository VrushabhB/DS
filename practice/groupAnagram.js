function groupAnagrams(words) {
  let map = new Map();

  for (let word of words) {
    let sortedString = word.split("").sort().join("");
    if (map.has(sortedString)) {
      map.get(sortedString).push(word);
    } else {
      map.set(sortedString, [word]);
    }
  }
  return Array.from(map.values());
}
const res = groupAnagrams(["cat", "dog", "tac", "god", "act"]);
console.log("res", res);
module.exports = groupAnagrams;
