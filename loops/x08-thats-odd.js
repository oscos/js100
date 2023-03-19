/*
  Created: 03/12/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Loops > That's Odd

  Instructions:

  Write a while loop that logs all odd natural numbers between 1 and 40.
*/

let i = 1;
while (i < 41) {
  if (i % 2 == 1) {
    console.log(i);
  }
  i += 1;
}
