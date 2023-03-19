/*
  Created: 03/16/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Strings > Contains Character

  Instructions:

  Write code that checks whether the string byteSequence contains the character x.
*/

// Solution 1
function findChar(pattern, str) {
  return pattern.test(str);
}

// Solution 2
function findChar(pattern, str) {
  return str.includes(pattern);
}

let byteSequence = "TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu";
console.log(findChar("x", byteSequence));
