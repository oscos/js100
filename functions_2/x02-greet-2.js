/*
  Created: 03/16/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Functions 2 > Greet 2


  Instructions:

  Change the function greet from the previous exercise, so that it takes two arguments: 
  a greeting with 'Hello' as default value, and a recipient with 'world' as default value. 
  The behavior should then be as follows:
*/

function greet(greeting = "Hello", recipient = "world") {
  console.log(`${greeting}, ${recipient}!`);
}

greet(); // logs: Hello, world!
greet("Salutations"); // logs: Salutations, world!
greet("Good morning", "Launch School"); // logs: Good morning, Launch School!
