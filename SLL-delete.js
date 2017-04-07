function Node(val){
  this.val = val;
  this.next = null;
}

function SLL(){
  this.head = null;
}

SLL.prototype.unshift = function(node){
  if(!this.head){
    this.head = node;
    return
  }
  node.next = this.head
  this.head = node;
}

SLL.prototype.delete = function(val){
  if(!val) return 'please provide a val';
  if(!this.head) return 'this linked list doesnt have anything in it yet.';
  if(this.head.val === val) {
    this.head = this.head.next;
    return 'item deleted';
  }
  if(!this.head.next) return 'value not present in this list';
  let current = this.head.next;
  let trail = this.head;
  while(current !== null){
    if(current.val === val){
      trail.next = current.next;
      return 'item deleted';
    }
    trail = current;
    current = current.next;
  }
  return 'item not present in list';
}

let BSLL = new SLL();

BSLL.unshift(new Node(5));
BSLL.unshift(new Node(4));
BSLL.unshift(new Node(3));
BSLL.unshift(new Node(2));
BSLL.unshift(new Node(1));
BSLL.delete(3);
BSLL.delete(1);
BSLL.delete(5);
console.log(BSLL.delete(6));
console.log(BSLL.delete(3));
console.log(BSLL.head);
