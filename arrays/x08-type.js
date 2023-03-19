/*
  Created: 03/16/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Arrays > Type

  Instructions:

  How can you check whether a variable holds a value that is an array? For example, 
  imagine you start writing a function and want to check whether its argument is an array:
*/

function filter(input) {
  // Is input an array?
  return Array.isArray(input);
}

let xArr = [1, 2, 3];
console.log(filter(xArr));
