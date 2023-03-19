/*
  Created: 03/16/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Strings > Case-insensitive Equality

  Instructions:

  Given strings like the following, how can you check whether they're equal 
  irrespective of whether the characters they contain are upper or lower case?
*/

function caseInsesitive(str1, str2) {
  let lowStr1 = str1.toLowerCase();
  let lowStr2 = str2.toLowerCase();

  return lowStr1 === lowStr2;
}

let string1 = "Polar Bear";
let string2 = "Polar bear";
let string3 = "Penguin";

console.log(caseInsesitive(string1, string2));
console.log(caseInsesitive(string1, string3));
console.log(caseInsesitive(string2, string3));
