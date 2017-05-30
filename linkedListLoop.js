'use strict';

//kata to find lenght a linked lists loop. Given Gaurantee that loop exists.

function loop_size(node){ //eslint-disable-line
  let fast = node.next;
  let slow = node;
  while(slow != fast) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let current = slow.next;
  let counter = 1;
  while(current != slow){
    current = current.next;
    counter += 1;
  }
  return counter
}
