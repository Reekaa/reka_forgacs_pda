const CardGame = require('../testing_task.js');
const Card = require('../card.js');

describe('testing', () => {
  let ace;
  let game;
  let cards;
  let threeDimonds;
  let fiveDimonds;
  let eightHearts;
  let tenHearts;

  beforeEach(() => {
    ace = new Card('ace', 1);
    threeDimonds = new Card('dimond', 3);
    fiveDimonds = new Card('dimond', 5);
    eightHearts = new Card('heart', 8);
    tenHearts = new Card('heart', 10);

    cards = [ace, threeDimonds, fiveDimonds, eightHearts, tenHearts];

    game =  new CardGame();
  })

  test('game can check ace', () => {
    console.log(ace);
    expect(game.checkForAce(ace)).toBe(true);
  })

  test('game can check highest card', () => {
    expect(game.highestCard(fiveDimonds, threeDimonds)).toBe('dimond 5 is the highest card.');
  })

  test('can get the total of the cards', () => {
    expect(game.cardsTotal(cards)).toBe(27);
  })
})
