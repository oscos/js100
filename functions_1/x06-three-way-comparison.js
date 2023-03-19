/*
  Created: 03/15/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Functions 1 > Three-way comparison

  Instructions:

  Write a function that compares the length of two strings. It should return -1 if 
  the first string is shorter, 1 if the second string is shorter, and 0 if they're 
  of equal length, as in the following example:

  Input: 2 strings
  Output: return -1, 1, 0
*/

function compareByLength(str1, str2) {
  // // Solution 1
  // if (str1.length < str2.length) {
  //   return -1
  // } else if (str1.length > str2.length) {
  //   return 1
  // } else {
  //   return 0
  // }

  // Solution 2
  switch (true) {
    case str1.length < str2.length:
      return -1;
    // break;
    case str1.length > str2.length:
      return 1;
    // break;
    default:
      return 0;
  }
}

console.log(compareByLength("patience", "perseverance")); // -1
console.log(compareByLength("strength", "dignity")); //  1
console.log(compareByLength("humor", "grace")); //  0
