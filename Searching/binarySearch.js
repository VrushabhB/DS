function binarySearch(array, num) {
  let lo = 0;
  let hi = array.length - 1;
  while (lo < hi) {
    let m = Math.floor((lo + hi) / 2);
    if (array[m] === num) {
      return num;
    } else if (num < array[m]) {
      hi = m - 1;
    } else {
      lo = m + 1;
    }
  }
}

module.exports = binarySearch;
