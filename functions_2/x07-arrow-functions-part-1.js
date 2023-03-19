/*
  Created: 03/16/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Functions 2 > Arrow Functions (Part 1)

  Instructions:

  Refactor the function below using arrow syntax. Line 9 should still log the same sentence.
*/

const template = "I VERB NOUN.";

// Solution 1
let sentence = (verb, noun) => {
  return template.replace("VERB", verb).replace("NOUN", noun);
};

// // LS Solution
// let sentence = (verb, noun) => template
//   .replace('VERB', verb)
//   .replace('NOUN', noun);

console.log(sentence("like", "birds"));
// logs: I like birds.
