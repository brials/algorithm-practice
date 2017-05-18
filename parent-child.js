'use strict'
var parentChildPairs = [
    [1, 3], [2, 3], [3, 6], [5, 6],
    [5, 7], [4, 5], [4, 8], [8, 9]
];

function numberOfParents(array){
  let map = {};
  for(let i = 0; i < array.length; i++){
    if(!map[array[i][0]]){
      map[array[i][0]] = 0;
    }
    if(map[array[i][1]] >= 0){
      map[array[i][1]] += 1;
    } else {
      map[array[i][1]] = 1;
    }
  }

  let zeroP = [];
  let oneP = [];
  for(let key in map){
    if(map[key] === 1){
      oneP.push(key);
    }
    if(map[key] === 0){
      zeroP.push(key);
    }
  }
  let outputOne = 'Zero parents: ' + zeroP.join(', ');
  let outputTwo = 'One Parent: ' + oneP.join(', ');
  return [outputOne, outputTwo];
}

console.log(numberOfParents(parentChildPairs));


/*
Your previous Markdown content is preserved below:

Suppose we have some input data describing relationships between parents and children over multiple generations. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique integer identifier.

For example, in this diagram, 3 is a child of 1 and 2, and 5 is a child of 4:
1   2   4
 \ /   / \
  3   5   8
   \ / \   \
    6   7   9

Write a function that takes this data as input and outputs two collections: one containing all individuals with zero known parents, and one containing all individuals with exactly one known parent.

Sample output:
Zero parents: 1, 2, 4
One parent: 5, 7, 8, 9


Below is some sample data in JavaScript and Java. Feel free to solve this problem in any language of your choice.


// JavaScript
var parentChildPairs = [
    [1, 3], [2, 3], [3, 6], [5, 6],
    [5, 7], [4, 5], [4, 8], [8, 9]
];

Right side is key in determining when something will not be output if it shows up more then once
or if it shows up only once putting it to the 2nd output group.


map: key = unique id
      value = number of parents.

won't necessarily start at 1.
no duplicates
No limit on number of children
[parent, child]



Welcome to the Interview!
 */
