/*
  Created: 03/16/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Objects > Retrieve a Value (Part 2)

  Instructions:

  Given the below object jane, write code that retrieves the country in which Jane is located.
*/

let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
};

// console.log(jane.location.country); // Solution 1
console.log(jane['location']['country']); // Solution 2