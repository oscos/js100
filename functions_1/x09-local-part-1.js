/*
  Created: 03/15/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Functions 1 > Locale Part 1

  Instructions:

  Write a function that extracts the language code from a locale. A locale is a combination 
  of a language code, a region, and usually also a character set, e.g en_US.UTF-8.
*/

function extractLanguage(str) {
  return str.split("_")[0]; // Solution 1
  //return str.substring(0, 2); // Solution2
}

console.log(extractLanguage("en_US.UTF-8")); // 'en'
console.log(extractLanguage("en_GB.UTF-8")); // 'en'
console.log(extractLanguage("ko_KR.UTF-16")); // 'ko'
