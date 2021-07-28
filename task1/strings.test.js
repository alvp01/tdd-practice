const stringLength = require('./strings')

test('expects the length of the string', ()=>{
  expect(stringLength('hello')).toBe(5);
});

test('expects to get an error for a short string', ()=>{
 expect(() => stringLength('')).toThrow('The string is too short');
});

test('expects to get an error for a long string', ()=>{
  expect(() => stringLength('12345678910')).toThrow('The string is too long');
 });