//given a list of intervals int he form of [1,5] [8,9] when given a new interval add it to the list.
// e.g. the above given [7,8] would become a list of [1,5], [7,9];
//list of intervals should be sorted and there should be no overlap;


function addInterval(list, newInt){
  if(!list || !newInt) return 'please provide a list and a new list.'
  let newList = [];
  var holder = [null,null];
  var intGreaterThenNew = false;

  list.forEach(int => {
    let temp = [];
    if(holder[0]){
      temp[0] = holder;
    } else {
      temp[0] = newInt[0];
    }
    if(holder[1]){
      temp[1] = holder[1];
    } else {
      temp[1] = newInt[1];
    }
    if(temp[0] > int[1]){
      newList.push(int); //new Interval is greater then both parts of the other
    }
    if(temp[0] <= int[1]){
      if(temp[0] <= int[0]){
        if(temp[1] > int[1]){
          //larger of new interval is larger then larger of current interval
          holder[1] = newInt [1];
        }
        if(temp[1] <= int[1]){
          if(temp[1] <= int[0]){ //new Interval is less then both parts of this interval
            if(temp[0] && temp[1]) {
              newList.push(temp);
            }
            newList.push(int);
            intGreaterThenNew = true;
            return
          }
          //larger of newinterval is less then larger of current interval;
          holder[1] = int[1];
        }
        //newInt min is less then current interval min
        holder[0] = newInt[1];
      }
      //newInt min is less less then current int max but not less then its min.
      holder[0] = int[0];
    }
  })
  if(!intGreaterThenNew) newList.push(holder);
  return newList;
}


var testList = [[1,5],[8,9]];

console.log(addInterval(testList, [6,7]))
console.log(addInterval(testList, [6,8]))
console.log(addInterval(testList, [2,3]))
