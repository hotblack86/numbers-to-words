const Numbers = require('../src/numbers')

describe("Numbers class", function() {
  
  beforeEach(function() {
    testNumber1 = 1;
    testNumber15 = 15;
    testNumber42 = 42;
    testNumber123 = 123;
    testNumber212 = 212;
    testNumber900 = 900;
  })

  it("Should take user input on creation", function() {
    numbers = new Numbers(testNumber1);
    expect(numbers.input).toEqual(1);
  })

  it("Should return length of input", function() {
    numbers = new Numbers(testNumber1);
    expect(numbers.len).toEqual(1);
  })

  it("Should return length of larger input ", function() {
    numbers = new Numbers(testNumber123);
    expect(numbers.len).toEqual(3);
  })

  it("Should have 3 array of words for single digit, double digit and ten multiples", function() {
    numbers = new Numbers(testNumber1);
    expect(numbers.singleDigits[0]).toEqual('zero');
    expect(numbers.doubleDigits[5]).toEqual('fifteen');
    expect(numbers.tensMultiple[8]).toEqual('eighty');
  })


  it("#toWords Should return one for 1", function() {
      numbers = new Numbers(testNumber1);
      numbers.toWords();
      expect(numbers.result).toEqual([
        'one'
      ]);
  })

  it("#toWords Should return fifteen for 15", function() {
    numbers = new Numbers(testNumber15);
    numbers.toWords();
    expect(numbers.result).toEqual([
      'fifteen'
    ]);
  })

  it("#toWords Should return fourty two for 42", function() {
    numbers = new Numbers(testNumber42);
    numbers.toWords();
    expect(numbers.result).toEqual([
      'forty', 'two'
    ]);
  })

  it("#toWords Should return one hundred and twenty three for 123", function() {
    numbers = new Numbers(testNumber123);
    numbers.toWords();
    expect(numbers.result).toEqual([
      'one', 'hundred', 'and', 'twenty', 'three'
    ]);
  })

  it("#toWords Should return two hundred and twelve for 212", function() {
    numbers = new Numbers(testNumber212);
    numbers.toWords();
    expect(numbers.result).toEqual([
      'two', 'hundred', 'and', 'twelve'
    ]);
  })

  it("#toWords Should return nine hundred for 900", function() {
    numbers = new Numbers(testNumber900);
    numbers.toWords();
    expect(numbers.result).toEqual([
      'nine', 'hundred'
    ]);
  })




  

  
})