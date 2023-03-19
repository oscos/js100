/*
  Created: 03/15/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Functions 1 > Display Division

  Instructions:

  Determine the output that the following code will log to the console.
*/

function multiplesOfThree() {
  let divisor = 1;

  for (let dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + " / " + divisor + " = 3");
    divisor += 1;
  }
}

multiplesOfThree; // Missing pair of parenthesis;

// Since the function is not invoked due to missing parenthesis on the last line, there is no output.
