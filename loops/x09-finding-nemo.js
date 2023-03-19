/*
  Created: 03/12/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Loops > Finding Nemo

  Instructions:

  Loop over the elements of the array fish, logging each one. Terminate 
  the loop immediately after logging the string 'Nemo'.
*/

let fish = ["Dory", "Marlin", "Gill", "Nemo", "Bruce"];

let i = 0;
while (i < fish.length) {
  let currentElement = fish[i];
  console.log(currentElement);
  if (currentElement === "Nemo") break;
  i += 1;
}
