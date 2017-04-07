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
  let count = 0;
  _splitList(this.head);
  function _splitList(node){
    if(count%2 === 0) ESLL.push(node);
    if(count%2 === 1) OSLL.push(node);
    count += 1;
    _splitList(node.next);
  }
}

let RSLL = new SLL();

RSLL.unshift(new Node(4));
RSLL.unshift(new Node(7));
RSLL.unshift(new Node(5));
RSLL.unshift(new Node(1));
RSLL.push(new Node(4));
RSLL.push(new Node(7));
RSLL.push(new Node(5));
RSLL.push(new Node(1));
