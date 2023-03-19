/*
  Created: 03/16/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Arrays > Equality

  Instructions:

  Predict the output of the below code. When you run the code, do you see what you expected? Why or why not?

*/

let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);

// This code will output false, since the strict equality operator `===` for Arrays
// checks whether the arrays being comapared reference the same address space in memory.
