// Lesson 4: Math and Concatenation

// Math is the bread and butter of programming
// and any useful program will need to perform
// calculations of some sort. All the basic
// mathematic priciples you would use in your
// school work apply to javascript as well.

// Addtion
2+2; // outputs 4

// Subtraction
10-15; // Outputs -5

// Multiplication
2*2; // outputs 4

// Division
10/2; //Outputs 5

// Exponet
3**2; // Outputs 9

// Modulus (find remainder)
5%1; // outputs 1

// Tearing a whole in time and space itself
5/0; // Outputs infinity

// Variables can be used to store
// calculated values
var answerIsFive = 5-0;

// You can even use variables WITH your
// calculations
var costOfPizza = 10;
var moneyInAccount = 1000;
var moneyLeftOver = moneyInAccount - costOfPizza; // 990

// A variable can use itself to adjust its value;
var example = 100;
example = example + 5; // example is now 105

// When making calculations, it is important to remember that order of operations
// (parenthesis, exponents, multiplicaiton, division, addtion, subtraction)
// always applies.  The numbers will NOT be calculated by the order they appear;
var x = 2 + 5 * 6;  // Is 32, not 60


// There may be times you wish to combine strings into one variable.
// This is possible through a process called concatenation.  This means
// that you can merge strings together to make one string.
// This is one by using the + operator with other strings

var firstName = "Carl"
var lastName = "Jr"
console.log('My name is ' + firstName + ' ' + lastName);

// If you attempt to concatenate a number with a string
// javascript will convert the number to a string
console.log('I have ' + 2 + ' dogs');

// Challange

// In MI, we have a sales tax of 6%.  Assign the cost of a good
// to its own variable, and then write an equation to calculate the
// total cost of the good with tax.  Store the result in a variable.
