var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  test('it should be able to add numbers', function(){
    calculator.previousTotal = 1
    calculator.add(4)
    expect(calculator.runningTotal).toBe(5)
  })

  test('it should be able to subtract numbers', function(){
    calculator.previousTotal = 7
    calculator.subtract(4)
    expect(calculator.runningTotal).toBe(3)
  })

  test('it should be able to multiply numbers', function(){
    calculator.previousTotal = 3
    calculator.multiply(5)
    expect(calculator.runningTotal).toBe(15)
  })

  test('it should be able to divide numbers', function(){
    calculator.previousTotal = 21
    calculator.divide(7)
    expect(calculator.runningTotal).toBe(3)
  })

  test('should be able to concatenate multiple number button clicks', function(){
    calculator.numberClick(2);
    calculator.numberClick(3);
    expect(calculator.runningTotal).toBe(23);
  })

  test('should be able to chain multiple operations together', function(){
    calculator.numberClick(1);
    calculator.numberClick(4);
    calculator.operatorClick('-');
    calculator.numberClick(6);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.numberClick(0);
    calculator.operatorClick('=');
    expect(calculator.runningTotal).toBe(18);
  })

  test('should be able to clear the running total without affecting the calculation', function(){
    calculator.numberClick(5);
    calculator.operatorClick('-');
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.clearClick()
    calculator.numberClick(7);
    calculator.operatorClick('=');
    expect(calculator.runningTotal).toBe(15);
  })


});
