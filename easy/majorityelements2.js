function majorityElement(nums) {
  let map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  let max = -1;
  let number;
  console.log(map);
  for (let entry of map.entries()) {
    let [key, value] = entry;
    if (max < value) {
      max = value;
      number = key;
    }
  }
  return number;
}
const res = majorityElement([1, 2, 2, 2, 3]);
console.log(res);
module.exports = majorityElement;
