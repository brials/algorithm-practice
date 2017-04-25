'use strict';

function quickSort(arr, lI, rI){
  if(!rI){
    rI = arr.length -1;
  }
  if(!lI){
    lI = 0;
  }
  let part = arr[lI];
  let i = lI;
  console.log(i);
  console.log('part', part)
  while(lI < rI){
    console.log('part', part)
    while(arr[rI] > part){
      console.log('ri', rI)
      rI--;
    }
    while(arr[lI] < part && lI != rI){
      lI++;
    }
    if(lI === rI){
      console.log('happened')
      let temp = arr[i];
      console.log('temp', temp)
      console.log(i)
      console.log(arr[0]);
      arr[i] = arr[lI];
      arr[lI] = temp;
      console.log('changed to',arr[lI])
    } else {
      let temp = arr[lI];
      arr[lI] = arr[rI];
      arr[rI] = temp;
    }
  }
  console.log('arr', arr)
  console.log('li', lI)
  console.log('ri', rI)
  if(rI > 1 && lI < arr.length-2){
    quickSort(arr, 0, lI - 1);
    quickSort(arr, lI + 1, rI);
  }
  return arr
}

// let test = [5,3,9,4,8,6,12,14];
let test = [5,3,15,17,18,6];

console.log(quickSort(test));
// console.log(quickSort(test2));
