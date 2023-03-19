/*
  Created: 03/15/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Functions 1 > Sum

  Instructions:

  Examine the example function invocation below. Write the function sum, such that 
  it accepts two arguments and returns the sum of its arguments. You may assume 
  that the function arguments will always be numbers.
*/

// Solution 1
let sum = (num1, num2) => num1 + num2;

// Solution 2
function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(22, 10)); // 32
