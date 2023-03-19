/*
  Created: 03/16/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Arrays > Last Element

  Instructions:

  Write a function that returns the last element of an input array. For example:
*/

function last(xArr) {
  return xArr[xArr.length - 1];
}

console.log(last(["Earth", "Moon", "Mars"])); // 'Mars'
