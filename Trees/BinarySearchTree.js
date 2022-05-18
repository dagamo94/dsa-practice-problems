const Queue = require("./Queue");

class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    // if the tree is empty or missing the root node
    // the key is inserted as the root
    if (this.key == null) {
      this.key = key;
      this.value = value;
    } else if (key < this.key) {
      // if the tree exists then we want to compare the key
      // if it's smaller than current key, then insert left
      if (this.left == null) {
        // insert left tree if node is empty to the left
        this.left = new BinarySearchTree(key, value, this);
      } else {
        // there is an existing left child
        // recursively call the insert() method so node is added further down
        this.left.insert(key, value);
      }
    } else {
      // do the same thing but for the right side
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }

  find(key) {
    if (this.key == key) {
      return this; // if node is found, return it
    } else if (key < this.key && this.left) {
      return this.left.find(key); // traverse to the left and recursively call find()
    } else if (key > this.key && this.right) {
      return this.right.find(key);
    } else {
      // searched entire tree and did not find the key
      throw new Error("Key Not Found");
    }
  }

  remove(key) {
    // remove nodes based on how many children nodes the parent has
    if (this.key == key) {
      if (this.left && this.right) {
        // replace the key and value of the node to be removed
        // search for the successor node
        // MAXIMUM on the left subtree or MINIMUM on the right subtree

        const successor = this.right._findMin(); // _findMin() is a helper to find smallest node
        //   const successor = this.left._findMax();

        // replace the key and value of the node to be removed
        this.key = successor.key;
        this.value = successor.value;

        // remove the duplicate node from the BST
        successor.remove(successor.key); // successor is a leaf node
      } else if (this.left) {
        // the node ONLY has a left child
        this._replaceWith(this.left); // replace current node with its left child _replaceWith() is a helper
      } else if (this.right) {
        // the node only has a right child
        this._replaceWith(this.right);
      } else {
        // if node has no children (it is a leaf)
        this._replaceWith(null);
      }
    } else if (key < this.key && this.left) {
      this.left.remove(key); // recursively call the remove()
    } else if (key > this.key && this.right) {
      this.right.remove(key); // recursively call the remove()
    } else {
      // key does not exist in our tree
      throw new Error("Key Not Found");
    }
  }

  // replace the node with the node that is passed in
  _replaceWith(node) {
    // check if the node we are replacing has a parent
    // connect references from the parent to the replacement node
    if (this.parent) {
      if (this.parent.left == this) {
        // current node to-be-replaced is on left
        this.parent.left = node;
      } else if (this.parent.right == this) {
        this.parent.right = node;
      }
      // replace the replacement node's parent reference
      if (node) {
        node.parent = this.parent;
      }
    
    // the node is a root node, we copy over the properties of replacement node
    } else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        // if "null" was passed in
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {
    // if the current node has no LEFT child, it is the ABSOLUTE MINIMUM
    if (!this.left) {
      return this;
    }

    // recursively traverse to the left
    return this.left._findMin();
  }

  //   _findMax() {
  //     // if the current node has no RIGHT child, it is the ABSOLUTE MAXIMUM
  //     if (!this.right) {
  //         return this;
  //     }
  //     return this.right._findMax()
  //   }

  dfsPreOrder(values = []) {
    // process
    values.push(this.value);

    // step left - process left recursively
    if (this.left) {
      this.left.dfsPreOrder(values);
    }

    // step right - process left recursively
    if (this.right) {
      this.right.dfsPreOrder(values);
    }

    return values;
  }

  dfsInOrder(values = []) {
    // step left
    if (this.left) {
      this.left.dfsInOrder(values);
    }

    // process the node
    values.push(this.value);

    // step right
    if (this.right) {
      this.right.dfsInOrder(values);
    }

    return values;
  }

  dfsPostOrder(values = []) {
    // step left
    if (this.left) {
      this.left.dfsPostOrder(values);
    }

    // step right
    if (this.right) {
      this.right.dfsPostOrder(values);
    }

    // process node
    values.push(this.value);

    return values;
  }

  bfs(values = []) {
    const queue = new Queue(); // initialize the Queue
    queue.enqueue(this); // start traversal at the beginning (root node)
    let node = queue.dequeue();

    while (node) {
      // process
      values.push(node.value);

      // left
      if (node.left) {
        queue.enqueue(node.left);
      }

      // right
      if (node.right) {
        queue.enqueue(node.right);
      }
      // we are done processing current node so we move onto the next
      node = queue.dequeue();
    }

    return values;
  }
}

module.exports = BinarySearchTree;
