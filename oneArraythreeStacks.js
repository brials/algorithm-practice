'use strict';

//Implementing 3 stacks in one array.

var stackArr = ['one', 'two', 'three'];

Array.prototype.stackPush = function(stack, data){
  var temp = stackArr.indexOf(stack) + 1;
  stackArr.splice(temp, 0, data);
  return stackArr;
}

Array.prototype.stackPop = function(stack){
  var temp = stackArr.indexOf(stack) + 1;
  if(stackArr[temp] === 'two' || stackArr[temp] === 'three' || stackArr[temp] === undefined){
    return `No value in stack ${stack}`;
  }
  return stackArr.splice(temp, 1);
}

Array.prototype.stackPeek = function(stack){
  var temp = stackArr.indexOf(stack) + 1;
  if(stackArr[temp] === 'two' || stackArr[temp] === 'three' || stackArr[temp] === undefined){
    return `No value in stack ${stack}`;
  }
  return stackArr[temp];
}

Array.prototype.stackIsEmpty = function(stack){
  var temp = stackArr.indexOf(stack) + 1;
  if(stackArr[temp] === 'two' || stackArr[temp] === 'three' || stackArr[temp] === undefined){
    return true;
  }
  return false;
}

stackArr.stackPush('one', 10);
stackArr.stackPush('one', 10);
stackArr.stackPush('one', 10);
stackArr.stackPush('two', 20);
stackArr.stackPush('two', 21);
stackArr.stackPush('two', 22);
stackArr.stackPush('two', 23);
stackArr.stackPush('two', 24);
stackArr.stackPush('two', 25);
console.log(stackArr);
console.log(stackArr.stackPop('two'));
console.log(stackArr);
console.log(stackArr.stackPeek('two'));
console.log(stackArr.stackIsEmpty('two'));
console.log(stackArr.stackIsEmpty('three'));
