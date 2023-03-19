/*
  Created: 03/14/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Conditionals > Yes? No? Part 2

  Instructions: 

  The code provided below will randomly initialize randomNumber to either 0 or 1 each time it is executed.

  Write an if statement that logs 'Yes!' if randomNumber is 1, and 'No.' if randomNumber is 0.
*/

let randomNumber = Math.round(Math.random());

console.log(randomNumber ? "Yes!" : "No.");
