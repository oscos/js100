/*
  Created: 03/16/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Functions 2 > Greet 1


  Instructions:

  How can we alter the function definition of greet so that the parameter greeting is assigned 
  a default value of 'Hello' when no argument is passed to the function invocation?
*/

function greet(greeting = "Hello") {
  console.log(greeting + ", world!");
}

greet("Salutations"); // logs: Salutations, world!

greet(); // logs: undefined, world!
// should log: Hello, world!
