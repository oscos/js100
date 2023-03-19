/*
  Created: 03/12/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Loops > Looping over Array Elements

  Instructions:

  Using the code below as a starting point, write a while loop that logs the elements 
  of array at each index, and terminates after logging the last element of the array.
*/

let array = [1, 2, 3, 4];
let index = 0;

while (index < array.length) {
  currentElement = array[index];
  console.log(currentElement);
  index += 1;
}
