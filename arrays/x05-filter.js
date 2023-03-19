/*
  Created: 03/16/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Arrays > Filter

  Instructions:

  Count the number of elements in scores that are 100 or above.
*/

// Solution 1
function benjamin(arr) {
  let counter = 0;
  for (let i = 0; i < scores.length; i += 1) {
    let currentElement = scores[i];
    if (currentElement >= 100) {
      counter += 1;
    }
  }

  return counter;
}

// Solution 2
function overBenjamin(arr) {
  let benArr = arr.filter((currentElement) => currentElement >= 100);
  return benArr.length;
}

let scores = [96, 47, 113, 89, 100, 102];
console.log(overBenjamin(scores));
