'use strict';

//make a queue out of 2 stacks.

function MyStack(){
  this.length = 0;
}

function MyQueue(){
  this.active = 'stack1'
  this.notActive = 'stack2'
  this.stack1 = new MyStack();
  this.stack2 = new MyStack();
}

MyQueue.prototype.push = function(val){
  if(this.active === 'stack2'){
    this.stack2.push('')
    this.pop();
    this.stack1.push(val)
    return;
  }
  this[this.active].push(val);
}

MyStack.prototype.push = function(val){
  this[this.length] = val;
  this.length += 1;
}

MyStack.prototype.pop = function(){
  this.length -= 1
  var temp = this[this.length]
  delete this[this.length]
  return temp;
}

MyQueue.prototype.pop = function(){
  if(this.active === 'stack2'){
    var result = this[this.active].pop();
  }
  var iterate = this[this.active].length;
  for(var i = 0; i < iterate; i ++){
    this[this.notActive].push(this[this.active].pop());
  }
  var hold = this.active;
  this.active = this.notActive;
  this.notActive = hold;
  if(this.active === 'stack2'){
    result = this.stack2.pop();
  }
  return result ;
}

let myq = new MyQueue();
myq.push(10)
myq.push(20)
myq.push(30)
myq.push(40)
myq.push(50)

myq.pop()// pop 10

myq.push(60);
myq.pop();// pop 20
myq.pop();// pop 30
myq.push(70)
myq.pop(); // pop 40
myq.pop(); // pop 50
myq.pop(); // pop 60


console.log('final', myq);
