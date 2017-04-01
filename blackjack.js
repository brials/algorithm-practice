'use strict';

// Implementing an object structure for Blackjack

function Card(val, suit){
  this.val = val;
  this.suit = suit;
}

function Deck(){
  this.cards = [];
  var suit = 'Hearts';
  for(var i = 0; i < 4; i++){
    for(var b = 1; b <= 13; b++){
      if(i === 1) suit = 'Daimonds';
      if(i === 2) suit = 'Clubs';
      if(i === 3) suit = 'Spades';
      this.cards.push(new Card(b, suit));
    }
  }
}

Deck.prototype.deal = function(){
  var index = Math.floor(Math.random() * this.cards.length);
  return this.cards.splice(index, 1);
}

function Player(){
  this.cards = [];
}

Player.prototype.countTotal = function(){
  var sum = 0;
  var aces = 0;
  this.cards.forEach(card => {
    if(card.val === 1){
      sum += 11;
      aces += 1;
    } else if(card.val >= 10){
      sum += 10;
    } else {
      sum += card.val;
    }
  })

  while(aces && sum > 21){
    sum -= 10;
    aces -= 1;
  }

  return sum;
}
// build out game functionality
