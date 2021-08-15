// Lesson 7: Functions

// There will be times you will need code a
// specific action to be performed over and
// over again.  That is where fucntions come
// in handy.  In short, functions are sections
// of code that run specific tasks.  Take the
// code below for example:

// This function will print the word 'Hello' to the console
function sayHello() {
    console.log("Hello");
  }

  // And we call it like this
  console.log("Example 1: Calling sayHello");
  sayHello();
  console.log("");

  // sayHello is what we call a void function, becaue it does not return
  // any values to us.

  // however, most functions you will see will return values. Any function
  // that has a return statement at the end WILL NOT be void, as it
  // will return a value of sorts.

  function returnANumber() {
    var randomNubmer = Math.random();
    return randomNubmer; // <--- Return statement indicates function is not void
  }

  var returnedNumber = returnANumber(); // <-- we called the function and stored the value in the returnedNumber variable
  console.log(
    "Example 2: Printing Value of returnedNumber to show that it called returnANumber()"
  );
  console.log(returnedNumber);
  console.log("");

  // you can even provide values for your function to work with.  to do this, you
  // need to define parameters between the parentheses.

  // in this case, we have created paramters called x and y, which
  // represent numbers that we are supposed to assign to the function
  function sumTwoNumbers(x, y) {
    // check to see that both x and y are valid
    // numbers before summing them
    if (isNaN(x) && isNaN(y)) {
      //return null if x and/or y are not valid numbers
      return null;
    }

    // return sum if x and y are valid numbers
    return x + y;
  }

  // when we call the function, we assign the parameters values.
  // these values are called arguments
  var sumOf5And6 = sumTwoNumbers(5, 6);

  console.log("Example 3: Display val of sumOf5And6");
  if (sumOf5And6 == null) {
    console.log(
      "At least one of the values provided to sumOfTwoNumbers is not a valid number."
    );
  } else {
    console.log("Here is my sum of 5 and 6: " + sumOf5And6);
  }
  console.log("");

  // As explained in an earlier lesson, objects can make use of functions.
  // This is because objects are comprised of attributes (what it is) and
  // actions (what it can do)
  var car = {
    // description of the car
    Make: "Chevy",
    Model: "Volt",
    Year: 2020,
    Color: "Red",
    isRunning: false,

    // what the car can do
    honk: function() {
      console.log("HONK HONK");
    },
    turn: function(direction) {
      if (direction.toLowerCase() == "left") {
        console.log("Turning left");
      } else if (direction.toLowerCase() == "right") {
        console.log("Turn right");
      } else {
        console.log("invalid direction");
      }
    },
    startOrShutOff() {
      if (this.isRunning) {
        console.log("Shutting off car");
        this.isRunning = false;
      } else {
        console.log("Turing on car");
        this.isRunning = true;
      }
    }
  };

  // turn the car on
  console.log("Example 4: Turn on car with startOrShutOff()");
  car.startOrShutOff();
  console.log("");

  // turning the car
  console.log("Example 5: Turn car left with turn('left')");
  car.turn("left");
  console.log("");

  // honk at guy that cut you off
  console.log("Example 6: Honk the horn with honk()");
  car.honk();
  console.log("");

  // turn right
  console.log("Example 7: Turn car right with turn('right')");
  car.turn("right");
  console.log("");

  // turn car off
  console.log("Example 8: turn car off with startOrShutOff()");
  car.startOrShutOff();

  // Challenges

  // Write a function that multiplies two values and returns
  // the result.  Save the result to a variable and print to
  // the console.

  // Create an object to represent an item you use everyday.
  // The object should have at least 3 attributes (description of what it is)
  // and 3 functions (actions it can perform).  Have at least one of these functions
  // return a value. If you get stuck, reference the car object above.
