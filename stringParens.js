'use strict';

function Node(val){
  this.val = val;
  this.next = null;
}

function Stack(){
  this.top = null;
}

Stack.prototype.push = function(node){
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
  let temp = this.top;
  this.top = this.top.next;
  return temp;
}

Stack.prototype.peek = function(){
  if(this.top){
    return this.top.val;
  }
}

Stack.prototype.isEmpty = function(){
  if(this.head) return false;
  return true;
}

function stringParenCheck(string){
  if(string.length === 0) return true;
  let tempStack = new Stack();
  for(let rI = 0; rI < string.length; rI++){
    if(string[rI] === '{' || string[rI] === '(' || string[rI] === '['){
      tempStack.push(new Node(string[rI]));
    }
    if(string[rI] === '}'){
      if(tempStack.pop().val != '{') return false;
    }
    if(string[rI] === ')'){
      if(tempStack.pop().val != '(') return false;
    }
    if(string[rI] === ']'){
      let temp = tempStack.pop().val
      if( temp !== '[') return false;
    }
  }
  if(!tempStack.isEmpty()) return false;
  return true;
}

console.log(stringParenCheck('[()]{aaa}b{sd[f(g)a(s)e](g)g}s'));
console.log(stringParenCheck('[(]faewfaagwrrwgw)'));
console.log(stringParenCheck(''));
console.log(stringParenCheck('faeweage'));
