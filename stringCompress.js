'use strict';

//Problem 1.6 from cracking the coding interview. No attempt at optimization.

function strComp(str){
  var count = 1;
  var strSort = str.split('').sort();
  var newArr = [];
  for(var i = 0; i < strSort.length; i++){
    if(newArr.indexOf(strSort[i]) >= 0){
      count += 1;
    } else {
      if(newArr.length) newArr.push(count)
      newArr.push(strSort[i]);
      count = 1;
    }
  }
  newArr.push(count);
  var str2 = newArr.join('');
  if(str2.length > str.length){
    return str;
  }
  return str2;
}


console.log(strComp('aaabbdcff'));
console.log(strComp('abc'));
