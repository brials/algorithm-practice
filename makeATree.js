'use strict';

//class assignment build a tree and implement postorder preorder and inorder taversal.
// Requirements of assignment dictate manually building tree otherwise I would add tree creation methods.


function Node(val){
  this.val = val;
  this.right = null;
  this.left = null;
}

function Tree(node){
  this.root = node;
}

function preOrder(node){
  console.log(node.val);
  if(node.left) preOrder(node.left);
  if(node.right) preOrder(node.right);
}
function inOrder(node){
  if(node.left) inOrder(node.left);
  console.log(node.val);
  if(node.right) inOrder(node.right);
}
function postOrder(node){
  if(node.left) postOrder(node.left);
  if(node.right) postOrder(node.right);
  console.log(node.val);
}

var bTree = new Tree(new Node('D'));
bTree.root.left = new Node('B');
bTree.root.left.left = new Node('A');
bTree.root.left.right = new Node('C');
bTree.root.right = new Node('H');
bTree.root.right.left = new Node('F');
bTree.root.right.left.left = new Node('E');
bTree.root.right.left.right = new Node('G');
bTree.root.right.right = new Node('I');

preOrder(bTree.root);
console.log('***********')
inOrder(bTree.root);
console.log('***********')
postOrder(bTree.root);
