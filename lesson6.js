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
console.log(thingsWithFourWheels[1]);  


//getting all of the cars in a loop and using a couple of functions that list has
for (i = 0; i < thingsWithFourWheels.length; i++) {
    console.log(thingsWithFourWheels.reverse()[i]);
}

//another type of loop called a for/in
for (thing in thingsWithFourWheels) {
    console.log(thing); //this doesn't seem right though
}

//get the actual values with a for/of
for (thing of thingsWithFourWheels) {
    console.log(thing); //this doesn't seem right though
}


//sets don't allow items to repeat
partyItems = new Set(['🍕', '🍾', '🎊','🍕']);
items = partyItems.values();
console.log(items.next());
console.log(items.next());
console.log(items.next());
console.log(items.next().done);

//We can perform functions on elements in a list
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map((x) => x * 2);
console.log(numbers2);


//Functions everywhere in javascript
var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);
console.log(first);

function myFunction(value, index, array) {
  return value > 18;
}