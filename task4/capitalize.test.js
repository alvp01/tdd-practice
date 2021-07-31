const capitalize = require('./capitalize')

describe('capitalize method',()=>{
  test('returns the string with the first character capitalized',()=>{
    expect(capitalize('henlo')).toEqual('Henlo');
  });
});