function findBottomLeftValue(root) {
  let queue = [root];
  let leftmost;

  while (queue.length > 0) {
    let node = queue.shift();
    leftmost = node.val;

    if (node.right) queue.push(node.right);
    if (node.left) queue.push(node.left);
  }

  return leftmost;
}
module.exports = findBottomLeftValue;
