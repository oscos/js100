/*
  Created: 03/15/2023
  Updated:
  Launch School - Intro to Javascript

  JS100 - JavaScript Basics > Functions 1 > Cite the Author

  Instructions:

  Let's generalize the function from the previous exercise a bit. Implement a function 
  cite that takes two string arguments: the author of the quote and what they said. 
  It then logs the quote to the console, as in the following example.
*/

function cite(str1, str2) {
  console.log(`${str1} said: "${str2}"`); // Solution 1
  // console.log(str1 + ' said: "' + str2 + '"'); // Solution 2
  // console.log(str1.concat(' said: "', str2, '"')); // Solution 3
}

cite("Brendan Eich", "Always bet on JavaScript.");
// logs:
// Brendan Eich said: "Always bet on JavaScript."
