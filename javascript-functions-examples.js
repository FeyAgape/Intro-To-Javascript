//Functions are reusable code.
//Functions allow you to package up lines of code that you can use (and often reuse) in your programs
//Parameters are variables that are used to store the data that's passed into a function for the function to use. 
//Arguments are the actual data that's passed into a function when it is invoked:
//Sometimes they take parameters
//parameter is listed as a variable after the function name, inside the parentheses. 
//And, if there were multiple parameters, you would just separate them with commas.

//e.g
function doubleGreeting(name, otherName) {
  // code to greet two people!
}

//example 1

function reverseString(reverseMe) {
  // code to reverse a string!
  var reversed = "";
  for (var x = reverseMe.length - 1; x >= 0; x--) {
    reversed += reverseMe[x];
  }
  return reversed;
}

console.log (reverseString ("fey"));
//return fey backwards = yef 


//example 2 
// accepts no parameters! parentheses are empty
// declares the sayHello function
function sayHello() {
  var message = "Hello!"
  return message; // returns value instead of printing it
}

// function returns "Hello!" and console.log prints the return value
console.log(sayHello());
//Prints out "Hello!"


/*
 * Programming Quiz: Laugh it Off 1 (5-1)
 */
 function laugh() {
     var message = "hahahahahahahahahaha!"
     return message;
 }

// your code goes here

console.log(laugh());
//prints  "hahahahahahahahahaha!"


/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */

function laugh(num) {
     var message = "";
     var i = "ha";
     for (var x = 0; x < num; x++) {
       message += i
     }
     return message + "!";
 }

// your code goes here

console.log(laugh(3));

/*It’s important to understand that return and print are not the same thing. 
Printing a value to the JavaScript console only displays a value (that you can view for debugging purposes), 
but the value it displays can't really be used for anything more than that. 
For this reason, you should remember to only use console.log to test your code in the JavaScript console.*/

//example

function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
  return "Returning: I am returning this string!";
}

isThisWorking(3);

//Prints: "Printing: isThisWorking was called and 3 was passed in as an argument"
//Returns: "Returning: I am returning this string!"

//If you don't explicitly define a return value, the function will return undefined by default.

function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
}
isThisWorking(3);

//Prints: "Printing: isThisWorking was called and 3 was passed in as an argument"
//Returns: undefined

//return example
function sleep() {
  console.log("I'm sleepy!");
  return "zzz";
  return "snore";
}

sleep();
//The function will return "zzz" and print "I'm sleepy!" to the console.
//"snore" will not be returned since the first return statement will exit the function.

//return example 2
function square(x) {
  return x * x;
}

function subtractFour(x) {
  return square(x) - 4;
}

console.log(subtractFour(5));
//The function will print 21. by multiplying 5 *5 - 4 = 21

//return example 3
function test() {
  return 1;
  return 2;
}

test();
//1 will be returned! Once the code evaluates the first return statement, the function finishes. 
//The second return statement will never be reached.

//However, it is possible to have multiple return statements in a function.
//For instance, you could use a conditional to specify when each of the return statements is evaluated. 
//You could, for example, only return the value of 1 if the string "one" was passed into the test() function. 
//Else, you could return the value of 2.


/*A function's return value can be stored in a variable or reused throughout your program as a function argument. 
Here, we have a function that adds two numbers together, and another function that divides a number by 2. 
We can find the average of 5 and 7 by using the add() function to add a pair of numbers together, 
and then by passing the sum of the two numbers add(5, 7) into the function divideByTwo() as an argument.
And finally, we can even store the final answer in a variable called average and use the variable to perform 
even more calculations in more places!*/

// returns the sum of two numbers
function add(x, y) {
  return x + y;
}

// returns the value of a number divided by 2
function divideByTwo(num) {
  return num / 2;
}

var sum = add(5, 7); // call the "add" function and store the returned value in the "sum" variable
var average = divideByTwo(sum); // call the "divideByTwo" function and store the returned value in the "average" variable

//Example 1

function addTen(x) {
  return x + 10;
}

function divideByThree(y) {
  return y / 3;
}

var result = addTen(2);
console.log(divideByThree(result));

/*The answer is 4!
var result = addTen(2); // the result variable will be assigned the value of 12
divideByThree(result); // passes the value of 12 as an argument into the divideByThree function
The divideByThree() function will divide the value of 12 by 3 and return 4!
*/

//Scope
//Global Scope: identifiers can be accessed everywhere within your program
//Function scope or local Scope: identifiers can be accessed everywhere inside the function it was defined in
//TIP: The JavaScript language is constantly improving. 
//One of these updates introduces a new type of scope, called Block scope.

//example
var james = "I'm looking for this book.....";

function library() {
  var librarian = "Oh, you'll want to look in the classic literature section, follow me!";
  function classicLiterature() {
    var book = "Great Expections";
    console.log(james);
  }

}

//exercises
//1. Which of these variables a, b, c, or d, is defined in the global scope?

var a = 1;
function x() {
  var b = 2;
  function y() {
    var c = 3;
    function z() {
      var d = 4;
    }
    z();
  }
  y();
}

x();
//The variable a is defined at the top level, not inside of any functions, so it has global scope.

//2. Where can you print out the value of variable c without resulting in an error?

var a = 1;
function x() {
  var b = 2;
  function y() {
    var c = 3;
    function z() {
      var d = 4;
    }
    z();
  }
  y();
}

x();
/*The variable c is defined inside function y(), so it's accessible only inside function y(). 
This means it can be printed anywhere inside function y(), as well as inside any functions declared inside function y().
The inner functions y() and z() have access to their own local variables, 
the variables defined inside the functions they were also defined in (x() and y() functions respectively), 
and any global variables.*/

//Always work on minimizing the use of global variables as much as possible.

//Scope overiding or shadowing
var bookTitle = "Le Petit Prince";//global
console.log(bookTitle);

function displayingBookEnglish () {
  bookTitle = "The Little Prince";//function
  console.log(bookTitle);
}

displayingBookEnglish();
console.log(bookTitle);

//prints out "Le Petit Prince" and "The Little Prince" and "The Little Prince"

//examples
//Without pasting into your console, what do you think this code will print out?

var x = 1;

function addTwo() {
  x = x + 2;
}

addTwo();
x = x + 1;
console.log(x);

//The global variable x is assigned the value of 1.
//Then, the function addTwo() increments the variable by 2.
//Next, the variable is incremented by 1.
//Finally, it's printed out using console.log.

var x = 1;

function addTwo() {
  var x = x + 2;
}

addTwo();
x = x + 1;
console.log(x);

//The global variable x is incremented by 1. 
//Since the global variable's original value was 1, and it was incremented by 1, console.log will print out 2.
//The variable assignment inside the function addTwo() only has function scope, 
//so its affect is not reflected outside the function.

!/*
If an identifier is declared in global scope, it's available everywhere.
If an identifier is declared in function scope, it's available in the function it was declared in (even in functions declared inside the function).
When trying to access an identifier, the JavaScript Engine will first look in the current function. If it doesn't find anything, it will continue to the next outer function to see if it can find the identifier there. It will keep doing this until it reaches the global scope.
Global identifiers are a bad idea. They can lead to bad variable names, conflicting variable names, and messy code.
*/

//Hoisting: before any Js is executed, all functions declarations are hoisted to the top of their current scope
//eg
findAverage (5,9);
function findAverage (x,y) {
  var answer = (x +y) / 2;
  return answer;
}
//returns 7

function sayGreeting () {
  console.log(greeting);
  var greeting = "hello";
}

sayGreeting();
//prints undefined 

function sayGreeting () {
  var greeting = "hello";
  console.log(greeting);
  }

sayGreeting();
//prints hello


//exercises
sayHi("Julia");

function sayHi(name) {
  console.log(greeting + " " + name);
  var greeting;
}

//prints undefined julia
//The function declaration is hoisted to the top of its current scope, 
//and inside the function, the greeting variable declaration is also hoisted to the top of its function scope.

sayHi("Julia");

function sayHi(name) {
  console.log(greeting + " " + name);
  var greeting = "Hello";
}

/*
The variable declaration is hoisted to the top of current scope (the top of the function). 
Remember that the declaration is hoisted, not the assignment. 
The code inside sayHi is equivalent to:

var greeting;
console.log(greeting + " " + name);
greeting = "Hello";*/

function sayHi(name) {
  var greeting = "Hello";
  console.log(greeting + " " + name);
}

sayHi("Julia");
//Not many surprises here! 
//The variable declaration and assignment are both already at the top of the function scope, 
//so the function will print out: "Hello Julia"


/*
JavaScript hoists function declarations and variable declarations to the top of the current scope.
Variable assignments are not hoisted.
Declare functions and variables at the top of your scripts, so the syntax and behavior are consistent with each other.
*/

/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(length) {
    var triangle = "";
    for (var i = 1; i <= length; i++) {
        triangle += makeLine(i);
    }
    return triangle;
}

console.log(buildTriangle(10));



//Function Expression: when a function is stored inside a variable
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++){
    catMessage += "meow ";
  }
  return catMessage;
};

//two ways to declear a function in Javascript
//function Declaration
function catSays (max) {
  //your code here
};
catSays();
//function Expression
// and if you run catSays you get the below
catSays
ƒ (max) {
  var catMessage = "";
  for (var i = 0; i < max; i++){
    catMessage += "meow ";
  }
  return catMessage;
}


//fucntions as parameters

/*
Functions as parameters
Being able to store a function in a variable makes it really simple to pass the function into another function. 
A function that is passed into another function is called a callback. 
Let's say you had a helloCat() function, and you wanted it to return "Hello" followed by a string of "meows"
 like you had with catSays. Well, rather than redoing all of your hard work, 
you can make helloCat() accept a callback function, and pass in catSays.
*/
// function expression catSays
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}

// pass in catSays as a callback function
helloCat(catSays);
//returns "Hello meow meow meow "


//Named function expressions
var favoriteMovie = function movie () {
  return "The Fountain";
};
favoriteMovie();
//returns "The Fountain"

/*
A function expression is when a function is assigned to a variable. 
And, in JavaScript, this can also happen when you pass a function inline as an argument to another function. 
Take the favoriteMovie example for instance:
*/
// Function expression that assigns the function displayFavorite 
// to the variable favoriteMovie
var favoriteMovie = function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
};

// Function declaration that has two parameters: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the favoriteMovie function and name of movie
movies(favoriteMovie, "Finding Nemo");
//Returns: My favorite movie is Finding Nemo

//But you could have bypassed the first assignment of the function, by passing the function to the movies() function inline.

// Function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the function and name of movie
movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");
//Returns: My favorite movie is Finding Nemo

//Function Expression: When a function is assigned to a variable. 
//The function can be named, or anonymous. 
//Use the variable name to call a function defined in a function expression.

// anonymous function expression
var doSomething = function(y) {
  return y + 1;
};
// named function expression
var doSomething = function addOne(y) {
  return y + 1;
};
// for either of the definitions above, call the function like this:
doSomething(5);
//Returns: 6


/*
 * Programming Quiz: Laugh (5-4)
 */
/* finish the function expression */
var laugh = function(num) {
     var message = "";
     var i = "ha";
     for (var x = 0; x < num; x++) {
       message += i;
     }
     return message + "!";
 };

// your code goes here
console.log(laugh(10));

/*
Write a named function expression that stores the function in a variable called cry and returns "boohoo!". 
Don't forget to call the function using the variable name, not the function name:

cry();
*/

/*
 * Programming Quiz: Cry (5-5)
 */

// your code goes here
var cry = function crying() {
  return "boohoo!";
};

console.log(cry());

/*
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function 
as an argument, pass an inline function expression instead.

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"
*/

/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// call the emotions function here and pass in an
// inline function expression
emotions("happy",function laugh(num) {
var msg = "";
 for (var x = 0; x < num; x++) {
msg += "ha";
}
return (msg + "!");
});