const calculator = require('./calculator');

describe('add method', ()=>{
  test('add two numbers', ()=>{
    expect(calculator.add(2,2)).toBe(4);
  });
  test('even adding negative numbers', ()=>{
    expect(calculator.add(2,-2)).toBe(0);
  });
  test('neutral element', ()=>{
    expect(calculator.add(10,0)).toBe(10);
  });
});

describe('subtract method', ()=>{
  test('subtract two numbers', ()=>{
    expect(calculator.subtract(2,4)).toBe(-2);
  });
  test('even subtracting negative numbers', ()=>{
    expect(calculator.subtract(2,-2)).toBe(4);
  });
  test('neutral element', ()=>{
    expect(calculator.subtract(10,0)).toBe(10);
  });
});

describe('divide method', ()=>{
  test('divide two numbers', ()=>{
    expect(calculator.divide(2,4)).toBe(0.5);
  });
  test('division by 0 is not defined', ()=>{
    expect(calculator.divide(2,0)).toBe(undefined);
  });
  test('neutral element', ()=>{
    expect(calculator.divide(10,1)).toBe(10);
  });
});

describe('multiply method', ()=>{
  test('multiply two numbers', ()=>{
    expect(calculator.multiply(2,-2)).toBe(-4);
  });
  test('mutiplying by 0 is 0', ()=>{
    expect(calculator.multiply(2,0)).toBe(0);
  });
  test('neutral element', ()=>{
    expect(calculator.multiply(10,1)).toBe(10);
  });
});