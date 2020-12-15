//Lesson 5: if and truth
/*Many decisions in code are made by checking if something is true
What is true?  Is true true?  Is "true" true?
*/
console.log(true);
if ("true") console.log("true");
console.log(1<2);

// What is false
console.log(false);
console.log("");
if ("false") console.log("this is actually true ???")
if (-0) console.log("Could this possibly be true too")

/*
Many times, coders need to check multiple cases to find which one is true or false
*/
temperature = 1
if (temperature <= 32) {
    console.log("It's freezing")
}
else if (temperature < 212) {
    console.log("It's liquid")
}
else {
    console.log("It's boiling")
}

//The {}'s make it so that the code inside of them is completed
if (false)
console.log("Not adding the {}'s ")
console.log("Often traps new coders")


//Conditional if statements can be written in many ways.  Which is the easiest to read??

if (32 < temperature && temperature < 212) 
console.log("It's liquid")

if (!temperature > 32 ||  !temperature > 212)
console.log("It's liquid")

if (32 < temperature < 212) //what on earth does this do?
console.log("It's liquid")

if (false < 212)
console.log("Be sure to compare the right types of values")

//There is a case statment as well for some tricky cases

switch(favoriteFood) {
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