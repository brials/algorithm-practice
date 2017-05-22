// for code wars catching car mileage numbers kata

function isInteresting(number, awesomePhrases) {
  if(number < 98) return 0;
  let num1 = number
  let num2 = number + 1;
  let num3 = number + 2;

  let result1 = testingSuite(num1, awesomePhrases);
  let result2 = testingSuite(num2, awesomePhrases);
  let result3 = testingSuite(num3, awesomePhrases);
  if (result1) return 2;
  if (result2 || result3) return 1;
  return 0;
}

function testingSuite(n, arr) {
  let res1 = allZeros(n);
  let res2 = sameNum(n);
  let res3 = incrementing(n);
  let res4 = decrementing(n);
  let res5 = palindrome(n);
  let res6 = awesomePhrases(n, arr);
  if(res1 || res2 || res3 || res4 || res5 || res6) return true
  return false
}

function allZeros(n){
  if(n < 100) return false;
  let digits = [];
  while(n > 0){
    let r = n % 10;
    digits.push(r);
    n = Math.floor(n / 10);
  }
  for(let i = 0; i < digits.length - 1; i++){
    if(digits[i] != 0) return false;
  }
  return true;
}

function sameNum(n){
  if(n < 100) return false;
  let check = n % 10;
  while(n > 0){
    if(n % 10 != check) return false;
    n = Math.floor(n/10);
  }
  return true;
}

function incrementing(n){
  if(n < 100) return false;
  let digits = [];
  while(n > 0){
    let r = n % 10;
    digits.push(r);
    n = Math.floor(n / 10);
  }
  if(digits[digits.length - 1] === 0) return false;
  for(let i = 0; i < digits.length - 1; i++){
    if(digits[i] == 0 && i == 0) digits[i] = 10;
    if(digits[i] != (digits[i+1] + 1)) {
      return false;
    }
  }
  return true;
}

function decrementing(n){
  if(n < 100) return false;
  let digits = [];
  while(n > 0){
    let r = n % 10;
    digits.push(r);
    n = Math.floor(n / 10);
  }

  if(digits[digits.length - 1] === 0) return false;
  for(let i = 0; i < digits.length - 1; i++){
    if(digits[i] === 0 && i != 0) digits[i] = 10;
    if(digits[i] != digits[i+1] - 1){
      return false;
    }
  }
  return true;
}

function palindrome(n){
  if(n < 100) return false;
  n = n.toString();
  for(let i = 0; i < n.length/2; i++){
    if(n[i] != n[n.length - 1 - i]) return false;
  }
  return true;
}

function awesomePhrases(n, arr){
  for(let i = 0; i < arr.length; i++){
    if(n === arr[i]) {
      return true;
    }
  }
  return false;
}
