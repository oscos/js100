/*
  Created: 03/12/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Loops > And on and on and on

  Instructions:

  The following code keeps looping forever. (You can hit Ctrl-C to stop it.) 
  Why is that? Also modify it so that it stops after the first iteration.
*/

// #1
for (let i = 0; ; i += 1) {
  console.log("and on");
  break;
}

// #2
for (let i = 0; i < 1; i += 1) {
  console.log("and on");
}
