/*
  Created: 03/16/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Functions 2 > Arrow Functions (Part 2)

  Instructions:

  The function initGame below returns an object. Refactor it using arrow function syntax.
*/

// let initGame = function () {
//   return {
//     level: 1,
//     score: 0,
//   };
// };

// // Solution 1:
// let initGame = () => {
//   return {
//     level: 1,
//     score: 0,
//   };
// };

// LS Solution:
let initGame = () => ({
  level: 1,
  score: 0,
});

let game = initGame();

console.log("Level: " + game.level);
console.log("Score: " + game.score);
