/*
  Created: 03/16/2023
  Updated:
  Launch School - Intro to Javascript
  JS100 - JavaScript Basics > Arrays > Checking items off the grocery list

  Instructions:

  We have made a grocery list, and as we check off items on that list, we would like to remove them.

  Write code that removes the items from 'groceryList' one by one, until it is empty. 
  If you log the elements you remove, the expected behavior would look as follows.
*/

let groceryList = [
  "paprika",
  "tofu",
  "garlic",
  "quinoa",
  "carrots",
  "broccoli",
  "hummus",
];

// Solution 1:
counter = groceryList.length;
while (counter > 0) {
  console.log(groceryList.pop());
  counter -= 1;
}

// // LS Solution:
// // There solution starts from the start and prints in the order the instructions display in their example.
while (groceryList.length > 0) {
  let checkedItem = groceryList.shift();

  console.log(checkedItem);
}

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

console.log(groceryList); // []
