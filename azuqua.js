'use strict';

function pushHistory(c, h){
  if(!c) return h;
  if(!c.length) return h; // assuming since no current just want to return current history. Would ask how client wants to handle this.
  if(!h) return [c];
  if(!h.length) return [c];

  let nS = [];
  for(let i = 0; i < c.length; i++){
    let inHistory = false;
    h.forEach(array => {
      for(let b = 0; b < array.length; b++){
        if(array[b] === c[i]) inHistory = true;
      }
    })
    if(!inHistory) nS.push(c[i]);
  }
  if(nS.length){ // decided that if nothing new is in we shouldn't adjust history would typically discuss with client to see how they wanted to handle.
    h.shift();
    h.push(nS);
  }
  return h;
}

let current = [ "xxx", "aaa", "yyy", "hij" ] //testing example given
let history = [ [ "aaa", "bbb" ], [ "ccc", "ddd", "eee", "fff" ], [ "ggg", "hij", "abc" ]  ]
console.log(pushHistory(current, history))

let current2 = [ "ccc", "aaa", "ddd", "hij" ] //testing with all duplicates
let history2 = [ [ "aaa", "bbb" ], [ "ccc", "ddd", "eee", "fff" ], [ "ggg", "hij", "abc" ]  ]
console.log(pushHistory(current2, history2))

let current3 = [ "new", "new2", "new3", "new4" ] //testing with all new
let history3 = [ [ "aaa", "bbb" ], [ "ccc", "ddd", "eee", "fff" ], [ "ggg", "hij", "abc" ]  ]
console.log(pushHistory(current3, history3))

let current4 = [] //testing with an empty current
let history4 = [ [ "aaa", "bbb" ], [ "ccc", "ddd", "eee", "fff" ], [ "ggg", "hij", "abc" ]  ]
console.log(pushHistory(current4, history4))

let current5 = [ "ccc", "aaa", "ddd", "hij" ] //testing with an empty history
let history5 = []
console.log(pushHistory(current5, history5))

let current6 = [ "ccc", "aaa", "ddd", "hij" ] //testing with an inappropriate type history
let history6 = 6
console.log(pushHistory(current6, history6))

let current7 = 7 //testing with an inappropriate type current
let history7 = [ [ "aaa", "bbb" ], [ "ccc", "ddd", "eee", "fff" ], [ "ggg", "hij", "abc" ]  ]
console.log(pushHistory(current7, history7))


// Write a node.js function that takes as input:
// current:  an array of strings
// history:  an array of (array of strings)
//
// and returns:
// newstrings:  a subset of current, containing only those strings which are in current but NOT in history
// newhistory:  an array of (array of strings) which is a modified version of history such that a) the zeroth (array of strings) is removed, and the newstrings array is appended to the end
//
// Example input:
// current:  [ "xxx", "aaa", "yyy", "hij" ]
// history:  [ [ "aaa", "bbb" ], [ "ccc", "ddd", "eee", "fff" ], [ "ggg", "hij", "abc" ]  ]
//
// Example output:
// newstrings:  [ "xxx", "yyy" ]
// newhistory:  [ [ "ccc", "ddd", "eee", "fff" ], [ "ggg", "hij", "abc" ], [ "xxx", "yyy" ] ]
//
//
// Please answer this question on your own, feel free or use whatever reference material you want but the answer you create should be your own.  Email me the answer when you're done (no .js attachment - email servers strip those out)
