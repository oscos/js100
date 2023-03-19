/*
  Created: 03/14/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Conditionals > Switch

  Instructions:

  Take a look at the code below. Without running it, determine what it will log to the console. 
  If you're not sure, refer to the MDN documentation on switch statements.
*/

let animal = "horse";

switch (animal) {
  case "duck":
    console.log("quack");
  case "squirrel":
    console.log("nook nook");
  case "horse":
    console.log("neigh");
  case "bird":
    console.log("tweet tweet");
  default:
    console.log("*cricket*");
}

// Since there is no break statement, this code will log neigh, tweet tweet, and cricket
