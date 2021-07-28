function reverseString(str){
  let rev = ''
  for(let i = 1; i <= str.length; i++){
    rev = rev + str[str.length - i]
  }
  return rev
}

module.exports = reverseString