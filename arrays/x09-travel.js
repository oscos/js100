/*
  Created: 03/16/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Arrays > Travel

  Instructions:

  The destinations array contains a list of travel destinations.

  Write a function that checks whether or not a particular destination is included 
  within destinations, without using the built-in method Array.prototype.includes().

  For example: When checking whether 'Barcelona' is contained in destinations, the 
  expected output is true, whereas the expected output for 'Nashville' is false.
*/

// Solution 1:
function contains(str, arr) {
  arr.forEach((currentElement) => {
    if (currentElement === str) {
      return true;
    }
  });
}

// Solution 2:
function contains(str, arr) {
  let xArr = arr.filter((currentElement) => {
    return currentElement === str;
  });

  return !!xArr.length;
}

// LS Solution:
// IMPORTANT! We are using the value to find the index of an array!
function contains(element, list) {
  return list.indexOf(element) >= 0;
}

let destinations = [
  "Prague",
  "London",
  "Sydney",
  "Belfast",
  "Rome",
  "Aruba",
  "Paris",
  "Bora Bora",
  "Barcelona",
  "Rio de Janeiro",
  "Marrakesh",
  "New York City",
];

console.log(contains("Barcelona", destinations)); // true
console.log(contains("Nashville", destinations)); // false
