/* Lesson 6 loops and groups of things
Coding is all about automation of mundane tasks.
Who wants to put away dishes when you can program something else to do it.
If we have 5 dishes, do we say....
Put away dish
Put away dish
Put away dish
Put away dish
Put away dish
What about if we have 500 dishes to put away?  50,000?
Put the dishes away. Is how we say it... to code it we say something else.....
*/

//This is a list of things
var thingsWithFourWheels = ["🚗", "🚐", "🚚"];

//Getting one of them out of the list. Which one does this show?
console.log("Example 1: Print 2nd index of thingsWithFourWheels array.");
console.log(thingsWithFourWheels[1]);
console.log("");

//getting all of the cars in a loop and using a couple of functions that list has
console.log(
  "Example 2: Loops through thingsWithFourWheels array and print contents in reverse order"
);
for (i = 0; i < thingsWithFourWheels.length; i++) {
  console.log(thingsWithFourWheels.reverse()[i]);
}
console.log("");

//another type of loop called a for/in
console.log(
  "Example 3: Loops through thingsWithFourWheels array and print posistion of contents"
);
for (thing in thingsWithFourWheels) {
  console.log(thing); //this doesn't seem right though
}
console.log("");

//get the actual values with a for/of
console.log(
  "Example 4: Loops through thingsWithFourWheels array and print contents"
);
for (thing of thingsWithFourWheels) {
  console.log(thing); //this doesn't seem right though
}
console.log("");

//sets don't allow items to repeat
console.log("Example 5: Iterate through partyItems set using next() function");
partyItems = new Set(["🍕", "🍾", "🎊", "🍕"]);
items = partyItems.values();
console.log(items.next());
console.log(items.next());
console.log(items.next());
console.log(items.next().done);
console.log("");

//We can perform functions on elements in a list
console.log(
  "Example 5: Store values of numbers1 array in numbers2 array, but increase them by a factor of 2"
);
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(x => x * 2);
console.log(numbers2);
console.log("");

//Functions everywhere in javascript
console.log(
  "Example 6: Use myFunction to find all contents in the numbers array greater than 18"
);
var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);
console.log(first);

function myFunction(value, index, array) {
  return value > 18;
}
