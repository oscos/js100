/*
  Created: 03/16/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Strings > Repeat

  Instructions:

  Implement a function repeat that repeats an input string a given number of times, 
  as shown in the example below; without using the pre-defined string method 
  String.prototype.repeat().
*/

function repeat(num, str) {
  let xStr = "";
  for (let n = 0; n < num; n += 1) {
    xStr += str;
  }
  return xStr;
}
console.log(repeat(3, "ha")); // 'hahaha'
