'use strict';

function palindrome(string){
  if(!string) return false;
  if(string.length <= 2) return true;

  for(let rI = 0; rI < Math.ceil(string.length/2); rI++){
    if(string[rI] != string[string.length - 1 - rI]){
      return false;
    }
  }
  return true;
}

console.log(palindrome('andna'));
console.log(palindrome('and'));
console.log(palindrome('ndn'));
console.log(palindrome('n'));
console.log(palindrome(''));
