/*
  Created: 03/15/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Functions 1 > Internationalization 1

  Instructions:

  Write a function that takes an ISO 639-1 language code and returns a greeting in 
  that language. You can take the examples below or add whatever languages you like.
*/

function greet(code) {
  switch (code) {
    case "en":
      return "Hi!";
    case "fr":
      return "Salut!";
    case "pt":
      return "Ola!";
    case "de":
      return "Hallo!";
    case "sv":
      return "Heji!";
    case "af":
      return "Haai!";
  }
}

console.log(greet("en")); // 'Hi!'
console.log(greet("fr")); // 'Salut!'
console.log(greet("pt")); // 'Olá!'
console.log(greet("de")); // 'Hallo!'
console.log(greet("sv")); // 'Hej!'
console.log(greet("af")); // 'Haai!'
