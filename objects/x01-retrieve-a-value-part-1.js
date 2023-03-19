/*
  Created: 03/16/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Objects > Retrieve a Value (Part 1)

  Instructions:

  Write the code necessary to retrieve the value of the courses property of our student object.
*/

let student = {
  name: "Carmen",
  age: 14,
  grade: 10,
  courses: ["biology", "algebra", "composition", "ceramics"],
  gpa: 3.75,
};

console.log(student["courses"]); // Solution 1
console.log(student.courses); // Solution 2
