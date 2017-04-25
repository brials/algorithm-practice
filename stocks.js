'use strict';

function roi(stocks){
  let minVal = stocks[0];
  let maxVal = stocks[0];
  let biggestDif;
  for(let i = 0; i < stocks.length; i++){
    if(minVal > stocks[i]) {
      if(maxVal - minVal > biggestDif || !biggestDif) biggestDif = maxVal - minVal;
      minVal = stocks[i]
      maxVal = 0;
    }
    if(maxVal < stocks[i]){
      maxVal = stocks[i];
    }
  }
  if(maxVal - minVal > biggestDif){
    biggestDif = maxVal - minVal;
  }
  if(!biggestDif || biggestDif < 0) {
    return 0;
  }
  return biggestDif
}

let testArray1 = [2, 1, 4];
let testArray2 = [2];
let testArray3 = [10, 9, 10, 9, 10];
let testArray4 = [4,3,2,2,2,3,9,6,10,1,0,4,5];

console.log(roi(testArray1));
console.log(roi(testArray2));
console.log(roi(testArray3));
console.log(roi(testArray4));
