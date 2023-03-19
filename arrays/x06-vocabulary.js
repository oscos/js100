/*
  Created: 03/16/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Arrays > Vocabulary

  Instructions:

  We've been given an array of vocabulary words grouped into sub-arrays by meaning. 
  This is a two-dimensional array or a nested array. Write some code that iterates 
  through the sub-arrays and logs each vocabulary word to the console.
*/

// Solution 1:
function logMe(array) {
  array.forEach((subArray) => {
    subArray.forEach((element) => {
      console.log(element);
    });
  });
}

// Solution 2:
function logMe(array) {
  for (let i = 0; i < array.length; i += 1) {
    let subArray = array[i];
    for (let j = 0; j < subArray.length; j += 1) {
      let currentElement = subArray[j];
      console.log(currentElement);
    }
  }
}

let vocabulary = [
  ["happy", "cheerful", "merry", "glad"],
  ["tired", "sleepy", "fatigued", "drained"],
  ["excited", "eager", "enthused", "animated"],
];

console.log(logMe(vocabulary));

// Expected output:
// happy
// cheerful
// merry
// etc...
