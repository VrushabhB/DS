/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let sortedArray = [...nums1, ...nums2];
  let length = sortedArray.length;
  let mid = Math.ceil(length / 2);

  if (length % 2 == 1) return sortedArray[mid];

  let mid2 = length / 2 - 1;

  return (mid + mid2) / 2;
};
findMedianSortedArrays([1, 2], [3, 4]);
module.exports = findMedianSortedArrays;
