/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
  let map = new Map();
  for (let word of words) {
    let sorted = word.split("").sort().join("");
    map.set(sorted, (map.get(sorted) || 0) + 1);
  }
  console.log(map);
  return [...map.values()].filter((item) => item > 1).length;
};

maximumNumberOfStringPairs(["cd", "ac", "dc", "ca", "zz"]);
