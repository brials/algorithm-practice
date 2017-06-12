'use strict'

//codeware kata for russian battleship game.

function validateBattlefield(field) {
  let crsr = 0, bs = 0, dst = 0, sub = 0;
  for(let r = 0; r < field.length; r++){
    for(let c = 0; c < field.length; c++){
      let shipLength = 0;
      if(field[r][c] === 1){
        field[r][c] = -1;
        let down = false;
        shipLength = 1
        if(field[r - 1] != undefined){
          if(field[r - 1][c] !== 0) return false;
          if(field[r - 1][c + 1] !== 0) return false;
          if(field[r + 1][c - 1] !== 0) return false;
          if(field[r - 1][c - 1] !== 0) return false;
        }
        if(field[r][c - 1] !== 0 && field[r][c - 1] !== undefined) return false;
        if(field[r + 1][c] === 1){
          down = true;
          let r2 = r;
          while(field[r2 + 1][c] === 1){
            shipLength += 1;
            r2 += 1;
            if(field[r2][c + 1] === 1 || field[r2][c + 1] < 0) return false;
            field[r2][c] = -1;
          }
        }
        let across = false;
        if(field[r][c + 1] === 1){
          across = true;
          let c2 = c;
          shipLength = 1
          while(field[r][c2 + 1] === 1){
            shipLength += 1;
            c2 += 1;
            if(field[r + 1][c2] === 1 || field[r + 1][c2] < 0) return false;
            field[r][c2] = -1;
          }
        }
        if(across && down) return false
        if(shipLength === 4) bs += 1;
        if(shipLength === 3) crsr += 1;
        if(shipLength === 2) dst += 1;
        if(shipLength === 1) sub += 1;
        if(bs > 1 || crsr > 2 || dst > 3 || sub > 4) return false;
      }
    }
  }
  if(bs === 1 && crsr === 2 && dst === 3 && sub === 4) return true;
}
