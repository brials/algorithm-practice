'use strict';

//implmentation of merge sort;

function mergeSort(arr){
  let half = Math.floor(arr.length / 2);
  if(arr.length > 1){
    let arr1 = mergeSort(arr.splice(0, half));
    let arr2 = mergeSort(arr)
    return merge(arr1, arr2);
  } else{
    return arr;
  }
}

function merge(_arr1, _arr2){
  let result = [];
  while(_arr1.length || _arr2.length){
    if(_arr1.length && _arr1[0] < _arr2[0]){
      result.push(_arr1.shift());
    } else if(!_arr2[0]){
      result.push(_arr1.shift());
    } else {
      result.push(_arr2.shift());
    }
  }
  return result;
}

let test = [5,3,9,4,8,6,12,14];
let test2 = [5,3,15,17,18,6];

console.log(mergeSort(test));
console.log(mergeSort(test2));
console.log(mergeSort([]));
console.log(mergeSort([2,1]));
