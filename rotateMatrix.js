'use strict';

//rotate matrixes of pixels for an image; (implemented as rotating an array of arrays  where both lengths of outside and inside are the same.)

var matrix = [[1,2,3],[4,5,6],[7,8,9]];
var matrixFour = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]

function rotateMatrix(array){
  var temp = [];
  for(var b = 0; b < array.length; b++){
    temp.push([]);
  }
  for(var i = 0; i< array.length; i++ ){
    for(var j = 0; j < array.length; j++){
      temp[(array.length - j) - 1][i] = array[i][j];
    }
  }
  for(var s = 0; s < temp.length; s++){
    console.log(temp[s]);
  }
  console.log('****************');
  return temp;
}

function optimizedRotateMatrix(array, count, temp){
  if (!temp){
    temp = [];
    for(var b = 0; b < array.length; b++){
      temp.push([]);
    }
  }
  if(!count) count = 1;
  // console.log(array);
  var hold = array.splice(0,1);
  console.log(hold.length);
  if(hold.length >= 0){
    for(var i = 0; i < hold[0].length; i++){

      temp[temp.length - 1 - i].push(hold[0][i]);
      console.log(hold[0][i])
    }
  }
  console.log('temp', temp)
  count += 1;
  if(array.length) temp = optimizedRotateMatrix(array, count, temp);
  for(var k = 0; k < temp.length; k++){
    console.log(temp[k])
  }
  return temp
}

var optMat = optimizedRotateMatrix(matrix);
// optMat = optimizedRotateMatrix(optMat);
// optMat = optimizedRotateMatrix(optMat);
// var optMat2 = optimizedRotateMatrix(optMat2);
// optMat2 = optimizedRotateMatrix(optMat2);
// optMat2 = optimizedRotateMatrix(optMat2);




// var newMat = rotateMatrix(matrix);
// newMat = rotateMatrix(newMat);
// newMat = rotateMatrix(newMat);
// newMat = rotateMatrix(newMat);
// newMat = rotateMatrix(newMat);
// var newMatTwo = rotateMatrix(matrixFour);
// newMatTwo = rotateMatrix(newMatTwo);
// newMatTwo = rotateMatrix(newMatTwo);
// newMatTwo = rotateMatrix(newMatTwo);
// newMatTwo = rotateMatrix(newMatTwo);
