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

SLL.prototype.push = function(node){
  if(!this.head){
    this.head = node;
    return
  }
  _findEnd(this.head);

  function _findEnd(_node){
    if(_node.next === null){
      _node.next = node;
    } else {
      _findEnd(_node.next);
    }
  }
}

SLL.prototype.rearrange = function(){
  if(!this.head) return 'nothing in this list to rearrange';
  if(!this.head.next || !this.head.next.next) return 'this linked list is already arranged'
  let ESLL = new SLL();
  let OSLL = new SLL();
  let current = this.head;
  let count = 0;
  while(current != null){
    if(count%2 === 0) ESLL.push(new Node(current.val));
    if(count%2 === 1) OSLL.push(new Node(current.val));
    current = current.next
    count +=1;
  }
  this.head = ESLL.head;
  current = this.head;
  while(current.next != null){
    current = current.next;
  }
  current.next = OSLL.head;
  return this;
}

let RSLL = new SLL();

RSLL.unshift(new Node(4));
RSLL.unshift(new Node(5));
RSLL.unshift(new Node(7));
RSLL.unshift(new Node(1));
RSLL.rearrange();

let NSLL = new SLL();

NSLL.unshift(new Node(57))
NSLL.unshift(new Node(5))
NSLL.unshift(new Node(17))
NSLL.unshift(new Node(32))
NSLL.unshift(new Node(0))

NSLL.rearrange();
