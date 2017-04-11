'use strict';

function mnemonics(num, call, string){
  if(!string) string = '';
  let letters = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wyxz'];

  if(string.length === 4){
    console.log('result', string)
    return
  }
  let digit = parseInt(num.toString()[0]);
  if(digit === 1) {
    mnemonics(parseInt(num.toString().substring(1)), 1, string + '*');
    return;
  }
  for(let i = 0; i < letters[digit-2].length; i++){
    mnemonics(parseInt(num.toString().substring(1)), i, string + letters[digit-2][i]);
  }
}

mnemonics(2345);
console.log('***********');
mnemonics(2314);
console.log('*************');
mnemonics(1111);

//not done yet.
