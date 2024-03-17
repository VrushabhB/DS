function twoSum(array, target) {
  let map = new Map();
  for (let index = 0; index < array.length; index++) {
    let num = array[index];
    let diff = target - num;
    if (map.has(diff)) {
      return [map.get(diff), index];
    } else {
      map.set(num, index);
    }
  }
  return null;
}

module.exports = twoSum;
