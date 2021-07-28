const reverseString = require('./reverse');

test('Expects to get a reverted string', ()=>{
  expect(reverseString('hello')).toBe('olleh');
});