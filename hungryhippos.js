'use strict';

//hungry hippos codewars kata;

function Game(board){
  this.board = board;
}

Game.prototype.play = function(){
  let count = 0;
  for(let r = 0; r < this.board.length; r++){
    for(let c = 0; c < this.board[r].length; c++){
      if(this.board[r][c] === 1){
        count += 1;
        mark(r, c, this.board);
      }
    }
  }
  return count;
}

function mark(r, c, board){
  if(r < 0 || c < 0 || r === board.length || c === board.length) return;
  if(board[r][c] === 0) return;
  board[r][c] = -1;
  mark(r + 1, c, board);
  mark(r, c + 1, board);
  mark(r - 1, c, board);
  mark(r, c - 1, board);
}
