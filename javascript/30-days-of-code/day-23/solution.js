// Start of function Node
function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
} // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
  this.insert = function (root, data) {
    if (root === null) {
      this.root = new Node(data);
      return this.root;
    }

    if (data <= root.data) {
      if (root.left) {
        this.insert(root.left, data);
      } else {
        root.left = new Node(data);
      }
    } else {
      if (root.right) {
        this.insert(root.right, data);
      } else {
        root.right = new Node(data);
      }
    }

    return this.root;
  };

  // Start of function levelOrder
  this.levelOrder = function (root) {
    // To print values separated by spaces use process.stdout.write(someValue + ' ')

    // If the tree is empty, return
    if (!root) return;

    // Create a queue for level-order traversal
    const queue = [];

    // Enqueue the root node
    queue.push(root);

    // Loop until the queue is empty
    while (queue.length > 0) {
      // Dequeue a node from the front of the queue
      const currentNode = queue.shift();

      // Print the node's data
      process.stdout.write(currentNode.data + " ");

      // Enqueue the left child if it exists
      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      // Enqueue the right child if it exists
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }; // End of function levelOrder
} // End of function BinarySearchTree

process.stdin.resume();
process.stdin.setEncoding("ascii");

var _input = "";

process.stdin.on("data", function (data) {
  _input += data;
});

process.stdin.on("end", function () {
  var tree = new BinarySearchTree();
  var root = null;

  var values = _input.split("\n").map(Number);

  for (var i = 1; i < values.length; i++) {
    root = tree.insert(root, values[i]);
  }

  tree.levelOrder(root);
});
