// Lesson 2: Variables Part 1

// Variables are containers for storing values.
// To use a variable, we first have to declare
// it like this:
var myVariable = 1;

// In javascript, you can give your variable any
// name as long as it is not a number or a keyword in
// the langauge.  If this rule is not followed, an
// error will be thrown.  Remove the double slashes in
// the line below to see an error thrown for the variable
// declartion

//var 1 = 1;

// Values have their own data types.  If variables are storage
// containers, think of data types as the TYPE of container we
// need to store something.  For instance, if we are storing shoes,
// we would use a shoebox.  And if we are storing toys, we would put
// them in a toybox.  Some data types include:

// number
// any numeric value
var myWholeNumber = 20;
var myDecimalNumber = 2.6

// string
// A set of characters between single or double quotes
var myString = "some text";

// boolean
// can only contain true or false
var isBoolean = true;


// Undefined
// When a variable is declared but not value is
// defined.  Uncomment the console.log statement
// below to see what happens when we attempt to
// use an undefined variable with console.log

var undefinedVariable;
//console.log(undefinedVariable);

// Null
// Like undefined, this datatype indicates that
// a variable has no value.  However, null is considered
// a different data type altogether.  We won't get into
// detailed reasons as to why in this lesson, but just
// understand for now that javescript sees null and
// undefined data types as different even though they
// hold the same value.  Uncomment the console.log
// statement below to see what happens when we
// attempt to dispaly a variable with a null value
var nullVariable = null;
console.log(nullVariable);

// NOTE: When checking if a variable has a value, developers
// tend do both null and defined checks, as they can be one
// or the other even if they do not contain a value.



// Challange
// Create your own variables with the data types
// we've convered and print their values to the
// console using console.log


