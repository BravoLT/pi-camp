// Lesson 4: Math and Concatenation

// Math is the bread and butter of programming
// and any useful program will need to perform
// calculations of some sort. All the basic
// mathematic priciples you would use in your
// school work apply to javascript as well.

// Addtion
console.log("Example 1: Add 2 + 2");
console.log(2 + 2); // outputs 4
console.log("");

// Subtraction
console.log("Example 2: Subtract 15 from 10");
console.log(10 - 15); // Outputs -5
console.log("");

// Multiplication
console.log("Example 3: Multiply 2 by a factor of 2");
console.log(2 * 2); // outputs 4
console.log("");

// Division
console.log("Example 4: Divide 10 by 2");
console.log(10 / 2); //Outputs 5
console.log("");

// Exponet
console.log("Example 5: 3 to the 2nd power");
console.log(3 ** 2); // Outputs 9
console.log("");

// Modulus (find remainder)
console.log("Example 6: Find remainder of 5 divided by 2");
console.log(5 % 2); // outputs 1
console.log("");

// Tearing a whole in time and space itself
console.log("Example 7: Divide 5 by 0");
console.log(5 / 0); // Outputs null
console.log("");

// Variables can be used to store
// calculated values
console.log(
  "Example 8: Output val of answerIsFive, which stores result of 5 - 0"
);
var answerIsFive = 5 - 0;
console.log(answerIsFive);
console.log("");

// You can even use variables WITH your
// calculations
console.log(
  "Example 9: Calculate how much is left over in account after paying for pizza"
);
var costOfPizza = 10;
var moneyInAccount = 1000;
var moneyLeftOver = moneyInAccount - costOfPizza; // 990
console.log(moneyLeftOver);
console.log("");

// A variable can use itself to adjust its value;
console.log("Example 10: Show variable adding to itself");
var example = 100;
console.log("Before adding to itself");
console.log(example);
example = example + 5; // example is now 105
console.log("After adding to itself");
console.log(example);
console.log("");

// When making calculations, it is important to remember that order of operations
// (parenthesis, exponents, multiplicaiton, division, addtion, subtraction)
// always applies.  The numbers will NOT be calculated by the order they appear;
console.log("Example 11: is 2 + 5 *6 equal to 32 or 60?");
var x = 2 + 5 * 6; // Is 32, not 60
console.log("Result");
console.log(x);
console.log("");

// There may be times you wish to combine strings into one variable.
// This is possible through a process called concatenation.  This means
// that you can merge strings together to make one string.
// This is one by using the + operator with other strings

console.log("Example 12: Concatenation with strings");
var firstName = "Carl";
var lastName = "Jr";
console.log("My name is " + firstName + " " + lastName);
console.log("");

// If you attempt to concatenate a number with a string
// javascript will convert the number to a string
console.log("Example 13: Concatenation with strings and a number");
console.log("I have " + 2 + " dogs");
console.log("");

// Challange

// In MI, we have a sales tax of 6%.  Assign the cost of a good
// to its own variable, and then write an equation to calculate the
// total cost of the good with tax.  Store the result in a variable.
