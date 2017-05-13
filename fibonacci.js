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
