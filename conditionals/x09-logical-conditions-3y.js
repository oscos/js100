/*
  Created: 03/14/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Conditionals > Logical Conditions 3

  Instructions: 
  
  Without running the below code, determine what will be logged to the console.
*/

let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log("$" + admissionPrice);

// This code outputs $3.99 since the `!` converts the true to not true.
