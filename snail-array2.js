'use strict';
const assert = require('assert');


var snailClock = function(array) {
  if(array[0].length === 0 || array.length === 0) return [];
  var countUpLength = 0;
  var countUpHeight = 0;
  var countDownLength = array[0].length - 1;
  var countDownHeight = array.length - 1
  var resArray = [];
  while(countDownHeight >= countUpHeight && countDownLength >= countUpLength){
    for(var i = countUpLength; i <= countDownLength; i++){
      resArray.push(array[countUpHeight][i]);
    }
    countUpHeight += 1;
    for(var r = countUpHeight; r <= countDownHeight; r++){
      resArray.push(array[r][countDownLength]);
    }
    countDownLength -= 1;
    for(var k = countDownLength; k >= countUpLength; k--){
      resArray.push(array[countDownHeight][k]);
    }
    countDownHeight -= 1;
    for(var t = countDownHeight; t >= countUpHeight; t--){
      resArray.push(array[t][countUpLength]);
    }
    countUpLength += 1;
  }
  return resArray
}

var test = [[1,2,3],[4,5,6],[7,8,9]]
var test2 = [[1,2,3],[4,5,6]];
var test3 = [[1,2],[3,4],[5,6]];

// var snailCounter = function(array) {
//   if(array[0].length === 0 || array.length === 0) return [];
//   var countUp = 0;
//   var countDown = array.length - 1;
//   var resArray = [];
//   while(countDown >= countUp){
//     for(var i = countUp; i <= countDown; i++){
//       resArray.push(array[i][countUp]);
//     }
//     countUp += 1;
//     for(var r = countUp; r <= countDown; r++){
//       resArray.push(array[countDown][r]);
//     }
//     for(var k = countDown - 1; k >= countUp - 1; k--){
//       resArray.push(array[k][countDown]);
//     }
//     countDown -= 1;
//     for(var t = countDown; t >= countUp; t--){
//       resArray.push(array[countUp - 1][t]);
//     }
//   }
//   return resArray
// }


// var clockTest = [
//   [[[1,2,3],[4,5,6],[7,8,9]],[1,2,3,6,9,8,7,4,5]],
//   [[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]],[1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]],
//   [[[1,2],[3,4],[5,6]], [1,2,4,6,5,3]]
// ];
//
// var clockCounterTest = [
//   [[[1,2,3],[4,5,6],[7,8,9]],[1,4,7,8,9,6,3,2,5]],
//   [[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]],[1,5,9,13,14,15,16,12,8,4,3,2,6,10,11,7]]
// ]
//
// clockTest.forEach(array => {
//   assert(snailClock(array[0]).join('') == array[1].join(''));
// });
//
// clockCounterTest.forEach(array => {
//   assert(snailCounter(array[0]).join('') == array[1].join(''));
// });
// console.log([1,2,3,4,5,6,7,8,9]);
console.log(snailClock(test));
console.log(snailClock(test2));
console.log(snailClock(test3));
// console.log(snailClock(clockTest[0][0]));
// console.log(clockTest[0][1]);
// console.log(snailClock(clockTest[0][0]).join('') == clockTest[0][1].join(''));
// console.log(snailCounter(test));
