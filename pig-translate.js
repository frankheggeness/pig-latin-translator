'use strict';
function pigTranslate(string) {
  let strArray = string.split('');
  if (['a', 'e', 'i', 'o', 'u', 'y'].includes(string[0])) {
    let vowelAdd = ['-ay'];
    strArray.push(vowelAdd);
    let newString = strArray.join('');
    return newString;
  } else {
    strArray.push('-');
    while (['a', 'e', 'i', 'o', 'u', 'y'].includes(strArray[0]) === false) {
      let addtoEnd = strArray.splice(0, 1);
      strArray.push(addtoEnd);
    }
    strArray.push('ay');
    let newWord = strArray.join('');
    return newWord;
  }
}
let testing = 'trying to fix branch';
module.exports = pigTranslate;
