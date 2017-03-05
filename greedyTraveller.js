'use strict';

//implementation of travellers problem where you only use the current shortest path.

function travelPath(array, current, home, path){
  if(!Array.isArray(array)) return 'expected an array';
  if(!home) home = array.splice(0,1);
  if(!current) current = home;
  var tracker = false;
  if(array.length){
    for(var i = 0; i < array.length; i++){
      var temp = Math.pow(Math.abs(array[i][0] - current[0][0]), 2) + Math.pow(Math.abs(array[i][1] - current[0][1]), 2);
      temp = Math.sqrt(temp);
      if(!tracker || tracker > temp) {
        tracker = temp;
        var index = i;
      }
    }
    current = array.splice(index, 1);
    if(!path) path = [home[0]];
    path.push(current[0]);
    return travelPath(array, current, home, path);
  }
  path.push(home[0]);
  return path
}

var array = [[0,0],[2,2],[4,2],[5,3],[1,1]];
var array2 = [[1,5],[6,2],[4,4],[3,8],[7,4],[2,2]]

console.log(travelPath(array))
console.log(travelPath(array2))
console.log(travelPath(4))
