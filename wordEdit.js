/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    if(!word1 && !word2) return 0;
    if(!word1) return word2.length;
    if(!word2) return word1.length;
    let matrix = [];
    for(let row = 0; row < word1.length + 1; row++){
        matrix.push([row]);
    }
    for(let column = 1; column < word2.length + 1; column++){
        matrix[0].push(column);
    }
    for(let r = 1; r <= word1.length; r++){
      for(let c = 1; c <= word2.length; c++){
        let del = matrix[r-1][c] + 1;
        let ins = matrix[r][c-1] + 1;
        let sub = matrix[r-1][c-1] + 1;
        if(word1[r - 1] === word2[c - 1]) sub--;
        let min = Math.min(del, sub, ins);
        matrix[r].push(min);
      }
    }
    return matrix[word1.length][word2.length];
};
