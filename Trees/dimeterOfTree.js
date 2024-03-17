class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class Tree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    let node = new Node(data);
    if (!this.root) {
      this.root = node;
      return;
    }
    this.insertNode(this.root, node);
  }
  insertNode(root, node) {
    if (node.value < root.value) {
      if (!root.left) {
        root.left = node;
        return;
      }
      this.insertNode(root.left, node);
    } else {
      if (!root.right) {
        root.right = node;
        return;
      }
      this.insertNode(root.right, node);
    }
  }

  printTreeBfS() {
    if (!this.root) return;
    let queue = [this.root];
    while (queue.length > 0) {
      let node = queue.shift();
      console.log(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  diameterOfBinaryTree() {
    let diameter = 0;
    function findeLonghestPath(root) {
      if (!root) return 0;
      let leftPath = findeLonghestPath(root.left);
      let rightPath = findeLonghestPath(root.right);
      diameter = Math.max(diameter, leftPath + rightPath);

      return Math.max(leftPath, rightPath) + 1;
    }
    findeLonghestPath(this.root);
    console.log(diameter);
    return diameter;
  }
  pathSumFrom(root, sum) {
    if (!root) return 0;
    return (
      (root.value === sum ? 1 : 0) +
      this.pathSumFrom(root.left, sum - root.value) +
      this.pathSumFrom(root.right, sum - root.value)
    );
  }
  pathSum(root, sum) {
    if (!root) return 0;
    return (
      this.pathSumFrom(root, sum) +
      this.pathSum(root.left, sum) +
      this.pathSum(root.right, sum)
    );
  }
}

let tree = new Tree();
tree.insert(50);
tree.insert(70);
tree.insert(30);
tree.insert(20);
tree.insert(10);
tree.insert(60);
tree.printTreeBfS();
tree.diameterOfBinaryTree();
