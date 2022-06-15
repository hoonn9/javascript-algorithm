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
  bfs() {
    const queue = [];
    const store = [];
    if (!this.root) return store;

    queue.push(this.root);

    while (queue.length) {
      const popped = queue.shift();
      store.push(popped);

      if (popped.left) queue.push(popped.left);
      if (popped.right) queue.push(popped.right);
    }

    return store;
  }
  preDfs() {
    if (!this.root) return [];

    const store = [];

    function helper(node) {
      store.push(node);

      if (node.left) {
        helper(node.left);
      }
      if (node.right) {
        helper(node.right);
      }
    }
    helper(this.root);

    return store;
  }

  postDfs() {
    if (!this.root) return [];

    const store = [];

    function helper(node) {
      if (node.left) {
        helper(node.left);
      }
      if (node.right) {
        helper(node.right);
      }

      store.push(node);
    }
    helper(this.root);

    return store;
  }
  inDfs() {
    if (!this.root) return [];

    const store = [];

    function helper(node) {
      if (node.left) {
        helper(node.left);
      }
      store.push(node);

      if (node.right) {
        helper(node.right);
      }
    }
    helper(this.root);

    return store;
  }
}
//      10
//   5     13
// 2  7  11  16

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

console.log(tree.inDfs());
