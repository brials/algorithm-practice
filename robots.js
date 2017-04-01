'use strict';

function Bot(time){
  this.time = time;
  this.timeDone = time;
  this.hasTasked = false;
  this.isTasking = false;
  this.makingBot = false;
}

function botOptimizer(arr, div){
  if(arr.length === 1) return arr[0];

  Bot.prototype.check = function(){
    this.time = time;
    if(this.makingBot){
      bots.push(new Bot(this.time));
      this.makingBot = false;
      makingBots -= 1;
      this.check();
      bots[bots.length-1].check();
      return;
    }
    if(this.isTasking){
      this.isTasking = false;
      if(!arr.length){
        var finished = true;
        bots.forEach(bot => {
          if(bot.isTasking) finished = false;
        })
        if(finished){
          tasks = null;
          minTime = time;
          return
        }
      }
      this.check();
      return;
    }
    if(arr[0]>(div + arr[bots.length- botsHaveTasked]) && !this.hasTasked && makingBots > 0 && !this.isTasking){
      console.log('start a task early', arr[0]);
      this.timeDone += arr.shift();
      this.hasTasked = true;
      this.isTasking = true;
      botsHaveTasked += 1;
    } else if((bots.length + makingBots) < tasks){
      console.log('make a bot');
      this.makingBot = true;
      this.timeDone += div;
      makingBots += 1;
    } else if(!this.hasTasked){
      console.log('start a task because no need for bots', arr[0]);
      this.timeDone += arr.shift();
      this.hasTasked = true;
      this.isTasking = true;
      botsHaveTasked += 1;
    }
  }



  var tasks = arr.length;
  var time = div;
  var bots = [new Bot(time), new Bot(time)]
  var makingBots = 0;
  var botsHaveTasked = 0;
  var minTime = 0;
  while(tasks){
    bots.forEach(bot => {
      if(bot.timeDone === time) bot.check();
    })
    time += 1;
    // console.log('while', time);
  }
  return minTime;
}

var array = [2000,200,20,2];
var div = 2; //should output 2002

var array2 = [10,9,8,7,6,5,4,3,2,1];
var div2 = 50; //should output 204

var arr3 = [100,90,80,3,2,1];
var div3 = 50;
console.log('end', botOptimizer(array, div));
console.log('end', botOptimizer(array2, div2));
console.log('end', botOptimizer(arr3, div3));
