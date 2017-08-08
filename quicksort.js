'use strict';

function quickSort(arr, lI, rI){
  if(lI < rI){
    let partI = partition(arr, lI, rI);
    quickSort(arr, lI, partI - 1);
    quickSort(arr, partI + 1, rI)
  }
  return arr;
}


function partition(a, beg, end){
  let pivot = a[end];
  let pIndex = beg;
  for(let i = beg; i < end - 1; i++){
    if(a[i] <= pivot){
      let temp = a[i];
      a[i] = a[pIndex];
      a[pIndex] = temp;
      pIndex++;
    }
  }
  let temp = a[end];
  a[end] = a[pIndex];
  a[pIndex] = temp;
  return pIndex;
}
// let test = [5,3,9,4,8,6,12,14];
let test = [5,3,15,17,18,6];

console.log(quickSort(test, 0, test.length -1));
// console.log(quickSort(test2));
