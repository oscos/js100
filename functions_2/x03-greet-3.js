/*
  Created: 03/16/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Functions 2 > Greet 3

  Instructions:

  Now we are going to outsource the greeting and recipient to functions. Change the function 
  greet from the previous exercise, so that it doesn't take any arguments, and instead 
  calls the functions greeting and recipient defined below.
*/

function greeting() {
  return "Good morning";
}

function recipient() {
  return "Launch School";
}

// Calling greet() should log Good morning, Launch School! to the console.

function greet() {
  console.log(`${greeting()}, ${recipient()}!`); // Solution 1
  // console.log(greeting() + ", " + recipient() + "!"); // Solution 2
}

greet();
