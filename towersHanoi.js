'use strict';

function Node(val){
  this.val = val;
  this.next = null;
}

function Stack(){
  this.top = null;
}

function Towers(){
  this.a = new Stack();
  this.b = new Stack();
  this.c = new Stack();
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

Towers.prototype.buildTower = function(n){
  for(let discs = n; discs > 0; discs--){
    this.a.push(new Node(discs));
  }
}

Towers.prototype.playGame = function(n, temp, target, current){
  let count = 1;
  if(n > 0) {
    count += this.playGame(n - 1, target, temp, current)
  }

  if(this[current].peek()){
    console.log('pushing ', this[current].peek(), ' from ', current, ' to ', temp);
    this[temp].push(this[current].pop());
  } else {
    count -= 1;
  }

  if(this[temp].peek() > this[target].peek() && this[target].peek() != null){
    count += this.playGame(n - this[target].peek(), temp, current, target);
  }

  return count;
}
//needs some final testing
let towers = new Towers();
towers.buildTower(4);
console.log(towers);
console.log(towers.playGame(4, 'b', 'c', 'a'));
console.log(towers);
