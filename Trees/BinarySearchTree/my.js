class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
      return this;
    }

    let curr = this.root;

    while (true) {
      if (value === curr.value) return undefined;
      if (curr.value > value) {
        if (curr.left) {
          curr = curr.left;
        } else {
          curr.left = node;
          return this;
        }
      } else {
        if (curr.right) {
          curr = curr.right;
        } else {
          curr.right = node;
          return this;
        }
      }
    }
  }

  find(value) {
    if (!this.root) return null;

    let curr = this.root;

    while (true) {
      if (curr.value === value) return curr;
      if (value < curr.value) {
        if (curr.left) {
          curr = curr.left;
        } else {
          return null;
        }
      } else {
        if (curr.right) {
          curr = curr.right;
        } else {
          return null;
        }
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(12);
tree.insert(6);
tree.insert(6);

console.log(tree.find(5));
