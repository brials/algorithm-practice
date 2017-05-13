'use strict'

function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.findMostSimilar = function(term) {
  console.log('term', term)
  let max = Infinity
  for(let i = 0; i < this.words.length; i++){
    console.log('word', this.words[i])
    let matrix = [];
    for(let rows = 0; rows <= this.words[i].length; rows++){
      matrix.push([rows]);
    }
    for(let columns = 1; columns <= term.length; columns++){
      console.log('happened', columns);
      matrix[0].push(columns)
    }
    for(let r = 1; r <= this.words[i].length; r++){
      for(let c = 1; c < term.length; c++){
        let del = matrix[r-1][c] + 1;
        let ins = matrix[r][c-1] + 1;
        let sub = matrix[r-1][c-1] + 1;
        if(term[c] === this.words[i][r]) sub--;
        let min = Math.min(del, sub, ins);
        matrix[r].push(min);
      }
      console.log('matrix', matrix)
    }
    let x = matrix.length;
    let y = matrix[x-1].length;
    console.log('result', matrix[x - 1][y - 1])
    console.log('max', max)
    if(matrix[x - 1][y - 1] < max) {
      max = matrix[x - 1][y - 1];
      var index = i;
    }
  }
  return this.words[index];
}


let dic = new Dictionary(['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry']);

console.log(dic.findMostSimilar('berry'));
