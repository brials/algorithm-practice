'use strict';

//rewriting merge sort for practice

function mergeSort(arr){
  let half = Math.floor(arr.length / 2);
  console.log(half);
  if(arr.length > 1){
    let arr1 = mergeSort(arr.splice(0, half));
    let arr2 = mergeSort(arr);
    return merge(arr1, arr2);
  } else {
    return arr;
  }
}

function merge(arr1, arr2){
  console.log(arr1, arr2)
  let newArr = [];
  while(arr1.length || arr2.length){
    if(arr1[0] && arr2[0]){
      if(arr1[0] <= arr2[0]){
        newArr.push(arr1.shift());
      } else {
        newArr.push(arr2.shift());
      }
    } else if(arr1[0]){
      newArr.push(arr1.shift());
    } else {
      newArr.push(arr2.shift());
    }
  }
  return newArr;
}

let test = [5,3,9,4,8,6,12,14];
let test2 = [5,3,15,17,18,6];

console.log(mergeSort(test));
console.log(mergeSort(test2));
console.log(mergeSort([]));
console.log(mergeSort([2,1]));
