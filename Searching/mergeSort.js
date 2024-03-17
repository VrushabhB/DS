function mergeSort(array) {
  //base case , return if length is 1 or 0
  if (array.length < 2) return array;
  // break into two arrays may be left or right
  let mid = Math.floor(array.length / 2);

  // create left and right
  let left = array.slice(0, mid);
  let right = array.slice(mid);
  //call mergeSort on left and right;

  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);

  //return the merge of left and right;

  return merge(sortedLeft, sortedRight);
}

function merge(array1, array2) {
  let result = [];

  while (array1.length && array2.length) {
    if (array1[0] <= array2[0]) {
      result.push(array1.shift());
    } else {
      result.push(array2.shift());
    }
  }
  return result.concat(array1, array2);
}

module.exports = mergeSort;
