"use strict";
const BinarySearchTree = require("./binary-search-tree");

function main() {
  let bstnumbers = new BinarySearchTree();

  // Create a binary search tree called BST and insert 3,1,4,6,9,2,5,7
  // into your tree. Compare your result with the result from the 1st exercise.
  bstnumbers.insert(3);
  bstnumbers.insert(1);
  bstnumbers.insert(4);
  bstnumbers.insert(6);
  bstnumbers.insert(9);
  bstnumbers.insert(2);
  bstnumbers.insert(5);
  bstnumbers.insert(7);
  console.log(bstnumbers);

  // Create a binary search tree called BST and insert E A S Y Q U E S T I O N into your tree.
  // Compare your result with the result from the 1st exercise.
  let bstletters = new BinarySearchTree();
  bstletters.insert("E");
  bstletters.insert("A");
  bstletters.insert("S");
  bstletters.insert("Y");
  bstletters.insert("Q");
  bstletters.insert("U");
  bstletters.insert("E");
  bstletters.insert("S");
  bstletters.insert("T");
  bstletters.insert("I");
  bstletters.insert("O");
  bstletters.insert("N");
  console.log(bstletters);
}

main();

// Without running this code in your code editor, explain what the following program does.
// Show with an example the result of executing this program. What is the runtime of this algorithm?
function tree(t) {
  if (!t) {
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}
// A: If there is a tree will get the value of the root node and add recursively the value
// of the node to the right and left of the tree until not more nodes. Runtime O(log(n))

// Write an algorithm to find the height of a binary search tree.
// What is the time complexity of your algorithm?
function heightoftree(tree) {
  if (tree.left && tree.right)
    return Math.max(heightoftree(tree.left), heightoftree(tree.right)) + 1;
  if (tree.left) return heightoftree(tree.left) + 1;
  if (tree.right) return heightoftree(tree.right) + 1;
  return 1;
}
// A: Time complexity O(log(n))

let bsttest = new BinarySearchTree();
bsttest.insert(3);
bsttest.insert(2);
bsttest.insert(1);

console.log(`The height of bsttest is ${heightoftree(bsttest)}`);

// Write an algorithm to check whether an arbitrary binary tree is a binary search tree,
// assuming the tree does not contain duplicates.
var isValidBST = function (tree) {
  return validateBst(tree, -Infinity, Infinity);
};

function validateBst(tree, minValue, maxValue) {
  if (tree == null) return true;
  if (tree.value > maxValue || tree.value < minValue) return false;
  return (
    validateBst(tree.right, tree.value, maxValue) &&
    validateBst(tree.left, minValue, tree.value)
  );
}

console.log(isValidBST(bsttest));

/*
7. 3rd largest node
Write an algorithm to find the 3rd largest node in a binary search tree.

8. Balanced BST
Write an algorithm that checks if a BST is balanced (i.e., a tree where no 2 
  leaves differ in distance from the root by more than 1).

9. Are they the same BSTs?
You are given two arrays which represent two sequences of keys that are used to 
create two binary search trees. Write a program that will tell whether the two BSTs 
will be identical or not without actually constructing the tree.
*/
