//Domain of this problem is to find the smallest positive integer not in an array;
// array can contain positive or negative integers to begin with but minimum return will always be 1;
//Max return will be the length of the array plys 1;

function findSmallestMissing(array){
  if(!array.length) return 1;
  for(let k = 0; k < array.length; k++){
    array[k] = array[k].toString();
  }
  console.log(array);

  for(let i = 0; i < array.length; i++){
    if(parseInt(array[i]) < array.length + 1 && parseInt(array[i]) > 0){
      array[parseInt(array[i]) - 1] += '.';
    }
  }
  console.log(array);
  for(let j = 0; j < array.length; j++){
    if(array[j].indexOf('.') < 0) return j + 1;
  }
  return array.length + 1;
}

console.log(findSmallestMissing(['1','2','3','4','6','7']))
console.log(findSmallestMissing([5, 7, 4, 18, -21, -1, 67]))
console.log(findSmallestMissing([1, 4, 6, 8, 90, 1, 0, 21]))
console.log(findSmallestMissing([1, 2, 3, 4, 5, 6, 7]))
