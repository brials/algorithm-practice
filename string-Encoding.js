'use strict';

function stringEncoding(string){
  let result = '';
  if(!string) return result;
  let count = 1;
  for(let rI = 0; rI < string.length; rI++){
    if(string[rI] != string[rI + 1]){
      result += count + string[rI];
      count = 1;
    } else {
      count++;
    }
  }
  return result;
}

console.log(stringEncoding('aaaabcccaa'));
console.log(stringEncoding('eeeffffee'));
