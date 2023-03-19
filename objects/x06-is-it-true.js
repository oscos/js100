/*
  Created: 03/16/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Objects > Is it true?

  Instructions:

  We are experimenting with some code to get more comfortable working with objects. 
  Run the snippet below and explain why "It's true!" is never output.

*/

let obj = {
  num: 42,
  "property name": "string value",
  true: false,
  fun: function () {
    console.log("Harr Harr!");
  },
};

for (let prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}

/*
LS Solution:
The condition of our if statement on line 11 returns false for all properties, 
because property names are always strings, while the body of our for loop 
looks for the Boolean value true.

Discussion
Object property names are always strings. When we omit quotes around our 
property names, JavaScript implicitly converts the name to a string. 
So true is not a property defined on obj, but 'true' is. 

*/
