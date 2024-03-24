function majorityElement(nums) {
  let map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  let max = -1;
  let number;
  for (let entry of map.entries()) {
    let [key, value] = entry;
    if (value < max) {
      max = value;
      number = key;
    }
  }
  return number;
}

module.exports = majorityElement;
