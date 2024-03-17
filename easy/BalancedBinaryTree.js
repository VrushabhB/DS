class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function isBalanced(root) {
  if (root === null) {
    return true;
  }

  // Check the height difference between left and right subtrees
  const heightDiff = Math.abs(getHeight(root.left) - getHeight(root.right));
  if (heightDiff > 1) {
    return false;
  }

  // Recursively check if left and right subtrees are balanced
  return isBalanced(root.left) && isBalanced(root.right);
}

function getHeight(node) {
  if (node === null) {
    return 0;
  }

  // Recursively calculate the height of the tree
  return 1 + Math.max(getHeight(node.left), getHeight(node.right));
}

module.exports = isBalanced;
