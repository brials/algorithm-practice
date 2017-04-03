'use strict';

//Assignment for 501. However have already completed once on Codewars so I will try and implement a new method
//Problem is to take the outside of an array of arrays in a snail pattern be it clockwise or counter;

function snail(arrayOfArrays, direction){
  if(direction !== 'clockwise' && direction !== 'counter') return 'please indicate a direction';
  var results = [];
  if(arrayOfArrays.length === 0) return results;
  var columns = arrayOfArrays[0].length;
  for(let i = 0; i < arrayOfArrays.length; i++){
    if(arrayOfArrays[i].length !== columns) return 'All arrays must have the same length';
  }
  if(direction === 'clockwise'){
    while(arrayOfArrays.length){
      results = results.concat(grabArray(arrayOfArrays.shift(), 'left'));
      console.log('results', results);

      let temp = grabEnds(arrayOfArrays, 'right', 'down');
      results = results.concat(temp[0]);
      arrayOfArrays = temp[1];
      console.log('results', results);
      results = results.concat(grabArray(arrayOfArrays.pop(), 'right'));
      console.log('results', results);
      temp = grabEnds(arrayOfArrays, 'left', 'up');
      results = results.concat(temp[0]);
      arrayOfArrays = temp[1];
      console.log('results', results);
    }
    return results;
  }
  if(direction === 'counter'){
    results.concat(grabEnds(arrayOfArrays, 'left', 'down'));
    console.log('results', results);
    results.concat(grabArray(arrayOfArrays.pop(), 'left'));
    console.log('results', results);
    results.concat(grabEnds(arrayOfArrays, 'right', 'up'));
    console.log('results', results);
    results.concat(grabArray(arrayOfArrays.shift(), 'right'));
    console.log('results', results);
    return results;
  }
}

function grabArray(array, start){
  console.log('in grab array', array, start);
  var temp = [];
  if(start === 'right'){
    for(var i = array.length; i > 0; i--){
      temp.push(array.pop());
    }
    return temp;
  } else {
    return array
  }
}

function grabEnds(arrayOfArrays, side, direction){
  console.log('in grabEnds', arrayOfArrays, side, direction)
  var temp = [];
  if(direction === 'up') arrayOfArrays.reverse();
  arrayOfArrays.forEach(array => {
    if(side === 'left'){
      temp.push(array.shift());
    } else {
      temp.push(array.pop());
    }
  })
  return [temp, arrayOfArrays];
}




var test = [[1,2,3],[4,5,6],[7,8,9]];

console.log(snail(test, 'clockwise'))
// console.log(snail(test, 'counter'))
