// Lesson 3: Variables Part 2

// Arrays
// Arrays allow you to hold multiple values of the same
// datatype in one variable.  For instance, say I wanted
// to make an array of strings that names my favorite TV shows,
// I could create it like so...

var favTVShows = [
    "Star Wars: The Clone Wars",
    "Star Trek: Deep Space Nine",
    "Cosmos",
    "Adventure Time"
  ];

  // When I want to access a specific value (or element) in an array, I need to call
  // it by it's corresponding index.  An index is the numeric position of
  // a value in an array.  So if I wanted to print Star Wars: The Clone Wars
  // to the console, I would do it like this;
  console.log("Example 1: Print first element of favTVShows array");
  console.log(favTVShows[0]);
  console.log("");

  // You might be wondering why I used the number 0 to pull the first
  // element in the array.  The reason for this is that unlike us, Javascript
  // begins counting at zero, not 1.  So the first element in this array would be 0.
  // The 2nd element would be 1
  console.log("Example 2: Print second element of favTVShows array");
  console.log(favTVShows[1]);
  console.log("");

  // and the 3rd and final element would be 2
  console.log("Example 3: Print third element of favTVShows array");
  console.log(favTVShows[2]);
  console.log("");

  // It is very important to remember this when looking to extract specific values
  // from your arrays.

  // Objects
  // An object is a variable that is comproised of multiple variables.
  // Traditonally, they represent a specific thing that contains multiple
  // properties.  The best way to display this is through code.

  var person = {
    FirstName: "Whit",
    LastName: "Wu",
    Age: 32,
    hasBeard: true
  };

  // In the above example, I have created a person object.
  // That person has a first name of whit, last name of wu, is 32 years old,
  // and has a beard.  To define these properties, I was able to use strings, numbers,
  // and booleans.

  // Objects can also define actions through functions.  Below I have
  // created a dog object that has a function called bark.  Uncomment
  // the code below the defintion to see what happens when the bark
  // function is called.

  var dog = {
    Name: "Spot",
    Breed: "Beagle",
    bark: function() {
      console.log("WOOF WOOF");
    }
  };

  // console.log('Example 4: call bark function from dog object')
  // dog.bark();
  // console.log('');

  // We will learn more about functions in a later lesson, but for now it is imporatnt to understand that
  // objects are used to describe what and entity is and give it actions to perform

  // Challenges

  // Create an array of 5 numbers, and print the 4th element out with console.log

  // Create a car object that contains the properties make, model, year, and color.
  // Write a function called honk, that displays 'Honk Honk' to the console, and call
  // it directly.
