'use strict';

'use strict';

function Node(val){
  this.val = val;
  this.next = null;
}

function Stack(){
  this.top = null;
  this.max = null;
}

Stack.prototype.push = function(node){
  if(node.val > this.max) this.max = node.val;
  if(!this.top) {
    this.top = node;
    node.next = null;
  } else {
    node.next = this.top
    this.top = node;
  }
}
Stack.prototype.pop = function(){
  if(!this.top) return null;
  if(this.max === this.top.val){
    let max = 0;
    let current = this.top.next;
    while(current != null){
      if(current.val > max) max = current.val;
      current = current.next;
    }
    this.max = max
  }
  let temp = this.top;
  this.top = this.top.next;
  return temp;
}

Stack.prototype.getMax = function(){
  return this.max;
}

let myStack = new Stack();
myStack.push(new Node(20))
myStack.push(new Node(10))
myStack.push(new Node(15))
myStack.push(new Node(16))
myStack.push(new Node(25))
myStack.push(new Node(22))
console.log(myStack.getMax());
myStack.pop();
console.log(myStack.getMax());
myStack.pop();
console.log(myStack.getMax());
