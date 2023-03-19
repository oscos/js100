/*
  Created: 03/16/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Objects > Car Keys

  Instructions:

  Write code that stores all of the vehicle property names in an array called keys.
*/

let vehicle = {
  manufacturer: "Tesla",
  model: "Model X",
  year: 2015,
  range: 295,
  seats: 7,
};

let keys = Object.keys(vehicle);
console.log(keys);