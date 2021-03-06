'use strict';

//implement a function that determines a possible orderinng for an alien alphabet given an array of words from the language

function createRules(words){
  let rules = [];
  let unique = [];
  for(let rI = 0; rI < words.length; rI++){
    let foundDif = false;
    for(let lI = 0; lI < words[rI].length; lI++){
      if(unique.indexOf(words[rI][lI]) < 0){
        unique.push(words[rI][lI])
      }
      if(words[rI][lI] && words[rI + 1] && words[rI + 1][lI]){
        if(words[rI][lI] != words[rI + 1][lI] && !foundDif){
          rules.push([words[rI][lI], words[rI + 1][lI]]);
          foundDif = true;
        }
      }
    }
  }

  console.log('rules', rules);
  for(let i = 0; i< rules.length; i++){
    let leftI = unique.indexOf(rules[i][0]);
    let rightI = unique.indexOf(rules[i][1]);
    if(leftI > rightI){
      unique.splice(rightI, 0, unique.splice(leftI, 1)[0]);
    }
  }

  return unique;
}

let test = ['baa', 'abcd', 'abca', 'cab', 'cad'];
let test2 = ['xza', 'ayh', 'ples', 'plares', 'bhaaz', 'bnc'];
let test3 = ['jtapk', 'ja', 'a', 'aty']

console.log(createRules(test));
console.log(createRules(test2));
console.log(createRules(test3));
