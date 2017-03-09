'use strict';

function Node(val){
  this.val = val,
  this.next = null
}

function SLL(){
  this.head = null
}

SLL.prototype.prepend = function(val){
  var node = new Node(val);
  if(!this.head){
    this.head = node;
    return;
  }
  node.next = this.head;
  this.head = node;
  return;
}

SLL.prototype.removeDuplicates = function(){
  if(!this.head || !this.head.next) return 'no duplicates';
  var array = [this.head.val];
  var curr = this.head.next;
  var prev = this.head;
  while(curr.next){
    if(array.indexOf(curr.val) >= 0){
      prev.next = curr.next
      curr = prev.next
    } else {
      array.push(curr.val);
      curr = curr.next;
      prev = prev.next;
    }
  }
  return;
}



var sll = new SLL();
sll.prepend(5);
sll.prepend(5);
sll.prepend(5);
sll.prepend(4);
sll.prepend(4);
sll.prepend(3);
sll.prepend(3);
sll.prepend(2);
sll.prepend(1);

console.log(sll);


sll.removeDuplicates();
console.log(sll);
