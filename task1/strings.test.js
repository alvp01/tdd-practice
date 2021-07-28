const stringLength = require('./strings')

test('expects the length of the string', ()=>{
  expect(stringLength('hello')).toBe(5);
});