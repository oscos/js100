/*
  Created: 03/16/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Arrays > Add + Delete

  Instructions:

  Given the following array of energy sources, 
  remove 'fossil' from the array, then add 'geothermal' to the end of the array.
*/

let energy = ["fossil", "solar", "wind", "tidal", "fusion"];

// Solution 1
energy.shift();
energy.push("geothermal");

// Solution 2
energy = energy.slice(1);
energy.push("geothermal");

// Solution 3 - this modifies the element in place by replacing it with  the new value.
energy[0] = "geothermal";

console.log(energy);
