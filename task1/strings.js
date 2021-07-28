function stringLength(str){
  if(str === ''){
    throw new Error('The string is too short');
  }else if(str.length > 10){
    throw new Error('The string is too long');
  }
  return str.length
}
module.exports = stringLength;