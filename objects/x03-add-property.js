/*
  Created: 03/16/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Objects > Add a Property

  Instructions:

  Below is a simple object representing our dog, Fido. On lines 8 and 9, write code 
  to add properties 'age' and 'favorite food' to the fido object.
*/

let fido = {
  name: "Fido",
  species: "Labrador Retriever",
  color: "brown",
  weight: 16,
};

// // // Solution 1:
// fido.age = 3; // Add property 'age'.
// fido["favorite food"] = "steak & gravy"; // Add property 'favorite food'.

// Solution 2:
fido["age"] = 3; // Add property 'age'.
fido["favorite food"] = "steak & gravy"; // Add property 'favorite food'.

console.log(fido);
