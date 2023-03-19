/*
  Created: 03/16/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Objects > ...and vice versa

  Instructions:

  Write code that does the reverse, starting from a nested array of pairs and building an object.
*/

let nestedArray = [
  ["title", "Duke"],
  ["name", "Nukem"],
  ["age", 33],
];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

// Solution 1:
let obj = {};
nestedArray.forEach((subArray) => (obj[subArray[0]] = subArray[1]));
console.log(obj);

// LS Solution
let person = Object.fromEntries(nestedArray);
console.log(person);
