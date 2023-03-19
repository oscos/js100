/*
  Created: 03/14/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basic > Conditionals > Are we moving?

  Instructions: 
  
  Determine what the following code snippet logs. First solve it in your head or on paper, and only then run it in your JavaScript console to check the result.

  */

let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);
console.log(isMoving);

// The code above returns true

// Bonus question: Do we need the parentheses in the boolean expression or could we also have written the following?

let isMoving2 = (brakingForce < acceleration && speed > 0) || acceleration > 0;
console.log(isMoving2);

// The code above also returns true, however the order of operation causes the expression to be evaluated differently.
