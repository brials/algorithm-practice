'use strict';

function Node(val){
  this.val = val;
  this.left = null;
  this.right = null;
}

function Tree(){
  this.root = null;
}

Tree.prototype.searchForDelete = function(node, val){
  if(node.right){
    if(node.right.val === val){
      return node;
    }
  }
  if(node.left){
    if(node.left.val === val){
      return node;
    }
  }
  if(val < node.val){
    if(node.left){
      return this.searchForDelete(node.left, val);
    } else {
      return 'no such node'
    }
  }
  if(val > node.val){
    if(node.right){
      return this.search(node.right, val);
    } else {
      return 'no such node';
    }
  }
}

Tree.prototype.delete = function(val){
  let parent = this.searchForDelete(this.root, val);
  var dir;
  if(val < parent.val){
    dir = 'left';
  } else {
    dir = 'right';
  }
  let child = parent[dir];
  if(!child.left && !child.right){
    parent[dir] = null;
  } else if(!child.left && child.right){
    parent[dir] = child.right;

  } else if(child.left && !child.right){
    parent[dir] = child.left;

  } else {
    let nextNum = child.right;

    if(nextNum.left){
      var prevNum = nextNum;
      nextNum = nextNum.left;
    }

    while(nextNum.left != null){
      prevNum = prevNum.left;
      nextNum = nextNum.left;
    }

    if(prevNum){
      prevNum.left = null;
    }

    parent[dir] = nextNum;

    if(nextNum.right){
      let tracker = nextNum.right;

      while(tracker.right != null){
        tracker = tracker.right;
      }

      tracker.right = child.right;
    }
    nextNum.left = child.left
  }
}




let myTree = new Tree();

myTree.root = new Node(20);
myTree.root.left = new Node(10);
myTree.root.left.left = new Node(5);
myTree.root.left.right = new Node(15);
myTree.root.right = new Node(40);
myTree.root.right.left = new Node(30);
myTree.root.right.right = new Node(60);
myTree.root.right.right.left = new Node(50);
myTree.root.right.right.left.right = new Node(55);

console.log(myTree);
