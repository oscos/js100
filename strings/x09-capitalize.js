/*
  Created: 03/16/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Strings > Capitalize Words

  Instructions:

  Write code that capitalizes the words in the string 'launch school tech & talk', 
  so that you get the string 'Launch School Tech & Talk'.
*/

function capitalize(str) {
  let xArr = str.split(" ");
  let yArr = xArr.map((currentElement) => {
    // return currentElement.replace(currentElement[0], currentElement[0].toUpperCase());
    return currentElement[0].toUpperCase() + currentElement.slice(1);
  });
  return yArr.join(" ");
}

let xStr = "launch school tech & talk";
console.log(capitalize(xStr));
