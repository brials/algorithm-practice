'use strict';
//given an inorder traversal printing create a tree based on that.
function Node(val){
  this.val = val;
  this.right = null;
  this.left = null;
}

function Tree(){
  this.root = null;
}

Tree.prototype.add = function(val, node){
  if(!this.root){
    this.root = new Node(val);
    return
  }
  if(!node){
    node = this.root;
  }
  if(node.val < val){
    if(node.right){
      this.add(val, node.right);
    } else {
      node.right = new Node(val);
      return
    }
  } else{
    if(node.left){
      this.add(val, node.left);
    } else{
      node.left = new Node(val);
      return
    }
  }
}

Tree.prototype.inOrderTree = function(arr, lI, rI){
  console.log('li', lI)
  console.log('ri', rI);
  if(rI-lI <= 0){
    this.add(arr[lI]);
    return
  }
  let mid = Math.floor((lI + rI)/2);
  console.log('mid', mid);
  this.add(arr[mid]);
  this.inOrderTree(arr, lI, mid - 1);
  this.inOrderTree(arr, mid + 1, rI);
  return this
}

let testTree = new Tree();
let testArray = [0,1,2,3,4,5,6,7,8];
console.log(testTree.inOrderTree(testArray, 0, 9));


//  This was too much for in class time so trying a simpler way for now but want to come back to this idea.
// function inOrderTree(arr){
//   let power = Math.floor(Math.log(arr.length) / Math.log(2));
//   let levels = power + 1;
//   let remainder = arr.length % Math.pow(2, power);
//   let mid = Math.pow(2, power -1);
// }
