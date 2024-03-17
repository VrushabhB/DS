/**
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the longest path from the
 * root node down to the farthest leaf node.
 */

function findMaxNodeDepth(root) {
  if (!root) return 0;
  let leftPath = findMaxNodeDepth(root.left);
  let rightPath = findMaxNodeDepth(root.right);

  return Math.max(leftPath,rightPath) + 1;

}
module.exports = findMaxNodeDepth;
