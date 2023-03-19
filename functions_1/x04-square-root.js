/*
  Created: 03/15/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Functions 1 > Squared Number

  Instructions:
  
  Write a function that accepts a single argument, a number, and returns the result 
  of multiplying its argument by an exponent of 2 (also known as squaring the number).

  Input: number
  Output: return arg**2
*/

function squaredNumber(num) {
  return num ** 2; // Solution 1
  // return num * num; // Solution 2
  // return Math.pow(num, 2); // Solution 3
}

console.log(squaredNumber(3)); // 9
