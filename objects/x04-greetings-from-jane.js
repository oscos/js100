/*
  Created: 03/16/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Objects > Greetings From Jane

  Instructions:

  Add a property to the below object, jane, so that the code on line 13 logs 'Hej, Bobby!' to the console.
*/

let jane = {
  firstName: "Jane",
  lastName: "Harrelson",
  age: 32,
  location: {
    country: "Denmark",
    city: "Aarhus",
  },
  occupation: "engineer",
  // add code here
  greet: function(xStr) {
    console.log(`Hej, ${xStr}!`)
  },
};

jane.greet("Bobby"); // Hej, Bobby!
