/*
  Created: 03/16/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Arrays > First Element

  Instructions:

  Write a function that returns the first element of an input array. 

  What would you return if the input array was empty?
*/

function first(xArr) {
  return xArr[0];
}

console.log(first(["Earth", "Moon", "Mars"])); // 'Earth'

// if Array is empty, the code will return undefined since index `0` would be outside the bounds of the array.
