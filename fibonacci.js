'use strict';

//recursive
function calcNFibonacci(n){
  if(n === 2) return 1;
  if(n <= 1){
    return 0;
  }
  return calcNFibonacci(n-1) + calcNFibonacci(n-2);
}

console.log(calcNFibonacci(3));
console.log(calcNFibonacci(4));
console.log(calcNFibonacci(5));
console.log(calcNFibonacci(6));
console.log(calcNFibonacci(7));
console.log(calcNFibonacci(8));
console.log(calcNFibonacci(9));
console.log(calcNFibonacci(10));
console.log(calcNFibonacci(11));

function calcNFibIter(n){
  if(!n) return 'please enter a number';
  if(n === 1) return 0;
  if(n === 2) return 1;
  let first = 0;
  let second = 1;
  let count = 2;
  while(count < n){
    let current = first + second;
    first = second;
    second = current;
    count++;
  }
  return second;
}

console.log(calcNFibIter(3));
console.log(calcNFibIter(4));
console.log(calcNFibIter(5));
console.log(calcNFibIter(6));
console.log(calcNFibIter(7));
console.log(calcNFibIter(8));
console.log(calcNFibIter(9));
