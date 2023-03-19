/*
  Created: 03/15/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Functions 1 > Internationalization 2

  Instructions:

  Building on your solutions from the previous exercises, write a function 
  localGreet that takes a locale as input, and returns a greeting. The 
  locale allows us to greet people from different countries differently 
  also when they share the language, for example:
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

function extractLanguage(str) {
  return str.split("_")[0];
}

function extractRegion(str) {
  return str.split(".")[0].split("_")[1];
}

function localGreet(str) {
  let eLanguage = extractLanguage(str);
  let eRegion = extractRegion(str);
  let eGreet = greet(eLanguage);

  switch (true) {
    case eRegion == "US":
      return "Hey!";
    case eRegion == "GB":
      return "Hello!";
    case eRegion == "AU":
      return "Howdy!";
    default:
      return eGreet;
  }
}

console.log(localGreet("en_US.UTF-8")); // 'Hey!'
console.log(localGreet("en_GB.UTF-8")); // 'Hello!'
console.log(localGreet("en_AU.UTF-8")); // 'Howdy!'
console.log(localGreet("fr_FR.UTF-8")); // 'Salut!'
console.log(localGreet("fr_CA.UTF-8")); // 'Salut!'
console.log(localGreet("fr_MA.UTF-8")); // 'Salut!'
