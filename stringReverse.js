'use strict';

//implementation of reversing a string without using .reverse

function reverseString(str1, str2){
  if(typeof str1 != 'string') return 'expected a string';
  if(!str2) str2 = '';
  str2 += str1.substring(str1.length -1);
  str1 = str1.substring(0, str1.length -1);
  if(!str1.length) return str2;

  return reverseString(str1, str2);
}

var string1 = '12345';
var string2 = 'reverse';
var string3 = 'tacocat';


console.log(reverseString(string1));
console.log(reverseString(string2));
console.log(reverseString(string3)); //Got ya.
