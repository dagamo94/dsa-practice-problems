// Problem: Given an array containing a post-order traversal of a BST,
// turn it back to a valid BST

class Bst {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

// What do we know about post-order traversals?
// the root node is always the last one processed
// nodes on the left side always processed before nodes on right

function inOrderToBstV1(arr) {
    if (arr.length === 0) return null;

    let middle = Math.floor(arr.length / 2);
    let root = new Bst(arr[middle]);

    root.left = postToBst(arr.slice(0, middle));
    root.right = postToBst(arr.slice(middle + 1));

    return root;
}

// space complexity: O(n)
function postToBst(arr) {
    // base case
    if (!arr.length) return null;

    const rootValue = arr[arr.length - 1]; // this is the root node

    const lessThan = arr.filter(
        (item, index) => item <= rootValue && index < arr.length - 1
    );
    const greaterThan = arr.filter(
        (item, index) => item > rootValue && index < arr.length - 1
    );

    const node = new Bst(rootValue); // construct the BST
    node.left = postToBstV1(lessThan); // recursively call the function to construct subtrees to left
    node.right = postToBstV1(greaterThan);

    return node; // returns the tree
}

// can we do this without using extra memory?
// no need to create a new array
// space complexity: O(1)
function postToBstV2(arr, start = 0, end = arr.length) {
    // if the start and end indices are the same, return null
    if (start === end) return null;

    const rootValue = arr[end - 1]; // last item in array is root node

    // identify the index where we switch from less than values
    // to greater than values
    let i = start;

    while (arr[i] < rootValue) i++; // increment i

    const node = new Bst(rootValue); // construct the BST
    node.left = postToBstV2(arr, start, i); // recursively construct the BST
    node.right = postToBstV2(arr, i, end - 1); // end - 1 because we want to exclude the root node index

    return node;
}

console.dir(postToBstV2([8, 12, 10, 16, 25, 20, 15]), { depth: null });
console.dir(postToBstV2([]), { depth: null }); // null