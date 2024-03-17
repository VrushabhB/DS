/**
 * Given an integer array nums where the elements are sorted in ascending order,
 * convert it to aheight-balanced binary search tree.
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function sortedArrayToBST(array) {
  if (!array.length) {
    return null;
  }
  let mid = Math.floor(array.length / 2);
  let root = new TreeNode(array[mid]);

  root.left = sortedArrayToBST(array.slice(0, mid));
  root.right = sortedArrayToBST(array.slice(mid + 1));

  return root;
}

module.exports = sortedArrayToBST;
