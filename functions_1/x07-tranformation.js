/*
  Created: 03/15/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Functions 1 > Transformation

  Instructions:

  Use JavaScript's string methods on the string 'Captain Ruby' to produce the string 'Captain JavaScript'.
*/

/*
// Solution 1
let xVar = "Captain Ruby";
let xArr = xVar.split(" ");
xArr[1] = "Javascript";
let yVar = xArr.join(" ");
console.log(yVar);
*/

// Solution 2
let rename = (xStr) => xStr.replace("Ruby", "Javascript");
let xVar = "Captain Ruby";
console.log(rename(xVar));
