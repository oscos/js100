/*
  Created: 03/16/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Strings > Blank? Version 2

  Instructions:

  Change your isBlank function from the previous exercise to return true 
  if the string is empty or only contains whitespace. For example:
*/

function isBlank(str) {
  return !str.length || str.includes(" ");
}

console.log(isBlank("mars")); // false
console.log(isBlank("  ")); // false
console.log(isBlank("")); // true
