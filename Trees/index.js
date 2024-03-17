class TreeNode {
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

  insert(value) {
    let newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    return this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    if (node.value < newNode.value) {
      if (!node.right) {
        node.right = newNode;
      } else {
        return this.insertNoode(node.right, newNode);
      }
    } else {
      if (!node.left) {
        node.left = newNode;
      } else {
        return this.insertNode(node.left, newNode);
      }
    }
  }

  search(value) {
    return this.searchNode(this.root, value);
  }

  searchNode(node, value) {
    if (!node) return false;
    if (node.value === value) return true;
    if (node.value < value) {
      return this.searchNode(node.right, value);
    }
    return this.searchNode(node.left, value);
  }

  remove(value) {}

  removeNode(node, value) {}

  findMinNode(node) {}

  dfsTraversal(node) {}
}

module.exports = Tree;
