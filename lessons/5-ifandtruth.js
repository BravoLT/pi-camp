//Lesson 5: if and truth
/*Many decisions in code are made by checking if something is true
What is true?  Is true true?  Is "true" true?
*/
console.log("Example 1: Print the boolean TRUE");
console.log(true);
console.log("");

console.log(
  "Example 2: If the if statement has a single value that is not null or false, it evaluates as true"
);
if ("true") console.log("true");
console.log("");

console.log("Example 3: Print boolean result of checking if 1 is less than 2");
console.log(1 < 2);
console.log("");

// What is false
console.log("Example 4: Print the boolean FALSE");
console.log(false);
console.log("");

console.log(
  "Example 5: Since there is a string in this if, and not a boolean, it evaluates to true and prints the message."
);
if ("false") console.log("this is actually true ???");
console.log("");

if (-0) console.log("Could this possibly be true too");

/*
Many times, coders need to check multiple cases to find which one is true or false
*/
console.log(
  "Example 6: Check value of temperature variable to see which message to print."
);
temperature = 100;
if (temperature <= 32) {
  console.log("It's freezing");
} else if (temperature < 212) {
  console.log("It's liquid");
} else {
  console.log("It's boiling");
}
console.log("");

//Below code does not run because value is not true, it's false
if (false) console.log("Not adding the {}'s ");

//Conditional if statements can be written in many ways.  Which is the easiest to read??

console.log(
  "Example 7: Checking if temperature is greater than 32 degress but less than 212 degrees"
);
if (32 < temperature && temperature < 212) console.log("It's liquid");
console.log("");

console.log(
  "Example 8: Another check if temperature is greater than 32 degress but less than 212 degrees, but with different code"
);
if (!temperature > 32 || !temperature > 212) console.log("It's liquid");
console.log("");

console.log(
  "Example 9: JS is not strongly-typed, so it allows us to compare values with different datatypes.  We do not want to do this."
);
if (false < 212) console.log("Be sure to compare the right types of values");
console.log("");

//There is a case statment as well for some tricky cases

console.log("Example 10: Using a case statement to check values");
var favoriteFood = "pizza";

switch (favoriteFood) {
  case "pizza":
    console.log("Very ninja turtle of you");
    break;
  case "icecream":
    console.log("Nice! Which kind");
    break;
  default:
    console.log("System Error. User does not know good food.");
}

//Challenge:  Write an if statement that represents an action to be performed on a
//specific day of the week.  e.g. if (today === "Monday")
