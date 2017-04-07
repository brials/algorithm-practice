'use strict';

// I got tired of writing single linked lists with a bunch of pushes to get them defined.

function Node(val){
  this.val = val;
  this.next = null;
}

function SLL(){
  this.head = new Node(arguments[0]);
  let current = this.head;
  for(var key in arguments){
    if(key != 0){
      current.next = new Node(arguments[key]);
      current = current.next;
    }
  }
}

console.log(new SLL(1,2,3,4,5,6));
