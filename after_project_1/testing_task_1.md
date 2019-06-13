### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.

```js
// Testing task 2 code:

// Carry out dynamic testing on the code below.
// Correct the errors below that you spotted in task 1.

var card = require('./card');
//  card is a class, should be var Card;

class CardGame{

  checkforAce(card){   //checkforAce should be checkForAce with camelCase
    if(card = 1){ // = should be ===, and card.value
      return true;
    }else{
      return false;
    }
  }

  highestCard(card1 card2){ // should be card1, card2
    if(card1.value > card2.value){
      return card.name // no .name on Card class
    }
    else{
      card2
    }
   }
 } // this bracket not needed

  static.cardsTotal(cards){ // static. should be removed from here
    return total; // should be let total = 0; to define total
    for(let card of cards){
      total += card.value;
      return "You have a total of " + total; // needs to be outside of the loop to work
    }
  }
}

// missing export
```
