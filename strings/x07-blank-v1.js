/*
  Created: 03/16/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Strings > Blank? Version 1

  Instructions:

  Write a function that checks whether a string is empty or not. For example:
*/

function isBlank(str) {
  return !str.length;
}

console.log(isBlank("mars")); // false
console.log(isBlank("  ")); // false
console.log(isBlank("")); // true
