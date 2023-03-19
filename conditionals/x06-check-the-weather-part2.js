/*
  Created: 03/14/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Conditionals > Check the Weather, Part 2

  Instructions: 
  
  Take your code from the previous Check the Weather exercise and rewrite it as a switch statement. 
  Feel free to add more cases besides 'sunny' and 'rainy'.
*/

// let weather = "sunny";
let weather = "rainy";

switch (weather) {
  case "sunny":
    console.log("Grab your umbrella.");
    break;
  case "rainy":
    console.log("Let's stay inside.");
    break;
  default:
    console.log("Cool weather!");
}
