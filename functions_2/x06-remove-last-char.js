/*
  Created: 03/16/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Functions 2 > Remove Last Char

  Instructions:
  
  Create a function removeLastChar that takes a string as an argument, 
  and returns the string without the last character.
*/

// Solution 1:
function removeLastChar(str) {
  let xArr = str.split("");
  xArr.pop();
  return xArr.join("");
}

// LS Solution:
// function removeLastChar(string) {
//   return string.substring(0, string.length - 1);
// }

console.log(removeLastChar("ciao!")); // 'ciao'
console.log(removeLastChar("hello")); // 'hell'
