/*
  Created: 03/16/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Objects > Convert an object to a nested array

  Instructions:

  Convert the person object into a nested array nestedPerson, containing the same key-value pairs.
*/

let person = {
  title: "Duke",
  name: "Nukem",
  age: 33,
};

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

// Solution 1:
let xArr = [];
for (let k in person) {
  // console.log(element);
  xArr.push([k, person[k]]);
}
console.log(xArr);

// LS Solution:
let nestedPerson = Object.entries(person);
console.log(nestedPerson);
