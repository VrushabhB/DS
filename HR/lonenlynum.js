function findUniqueElement(arr) {
  let uniqueElement = 0;
  for (let i = 0; i < arr.length; i++) {
    uniqueElement ^= arr[i];
  }
  return uniqueElement;
}
