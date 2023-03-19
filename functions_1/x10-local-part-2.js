/*
  Created: 03/15/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Functions 1 > Locale Part 2

  Instructions:

  Similar to the previous exercise, now write a function that extracts the region 
  code from a locale. For example:
*/

function extractRegion(str) {
  return str.split(".")[0].split("_")[1]; // Solution 1
  // return str.substring(3, 5); // Solution 2
}

console.log(extractRegion("en_US.UTF-8")); // 'US'
console.log(extractRegion("en_GB.UTF-8")); // 'GB'
console.log(extractRegion("ko_KR.UTF-16")); // 'KR'
