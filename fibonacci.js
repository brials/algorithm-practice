'use strict';

//recursive
// function calcNFibonacci(n){
//   if(n === 2) return 1;
//   if(n <= 1){
//     return 0;
//   }
//   return calcNFibonacci(n-1) + calcNFibonacci(n-2);
// }
//
// console.log(calcNFibonacci(3));
// console.log(calcNFibonacci(4));
// console.log(calcNFibonacci(5));
// console.log(calcNFibonacci(6));
// console.log(calcNFibonacci(7));
// console.log(calcNFibonacci(8));
// console.log(calcNFibonacci(9));
// console.log(calcNFibonacci(10));
// console.log(calcNFibonacci(11));


function calcNFibMemo(n){
  if(n === 1) return 0;
  if(n === 2) return 1;
  let obj = {1 : 0, 2 : 1};
  function calcRecur(n){
    if(obj[n - 1] >= 0 && obj[n - 2] >= 0) {
      obj[n] = obj[n - 1] + obj[n-2];
    } else if(obj[n-1] >= 0){
      obj[n] =  obj[n-1] + calcRecur(n-2);
    } else if(obj[n-2] >= 0){
      obj[n] = calcRecur(n-1) + obj[n-2];
    } else {
      obj[n] = calcRecur(n-1) + calcRecur(n-2);
    }
  }
  calcRecur(n);
  return obj[n]
}


console.log(calcNFibMemo(3));
console.log(calcNFibMemo(4));
console.log(calcNFibMemo(5));
console.log(calcNFibMemo(6));
console.log(calcNFibMemo(7));
console.log(calcNFibMemo(8));
console.log(calcNFibMemo(15));


// function calcNFibIter(n){
//   if(!n) return 'please enter a number';
//   if(n === 1) return 0;
//   if(n === 2) return 1;
//   let first = 0;
//   let second = 1;
//   let count = 2;
//   while(count < n){
//     let current = first + second;
//     first = second;
//     second = current;
//     count++;
//   }
//   return second;
// }
//
// console.log(calcNFibIter(3));
// console.log(calcNFibIter(4));
// console.log(calcNFibIter(5));
// console.log(calcNFibIter(6));
// console.log(calcNFibIter(7));
// console.log(calcNFibIter(8));
// console.log(calcNFibIter(9));
