// Logical operators can be used in conjunction with boolean values (true and false) to create complex logical expressions.
// By combining two boolean values together with a logical operator, 
// you create a logical expression that returns another boolean value. 
// Here’s a description of the different logical operators:
// &&  Logical AND value1 && value2  Returns true if both value1 and value2 evaluate to true.
// ||  Logical OR  value1 || value2  Returns true if either value1 or value2 (or even both!) evaluates to true.
// ! Logical NOT !value1 Returns the opposite of value1. If value1 is true, then !value1 is false.So adding it to the start of a value reverses it.


!(4 === 4) && "STRing" === "STRing"
// Returns: false 

//Example of an if statement using a logical operator
var colt = "not busy";
var weather = "nice";

if (colt === "not busy" && weather === "nice") {
  console.log("go to the park");
}

//Example of an else if statement using a logical operator

var dayOfTheWeeek = "Monday";
var weather = "cloudy";

if (weather === "cloudy" || dayOfTheWeeek === "Tuesday") {
  console.log("Fey don't have to go to work");
  } else if (weather === "cloudy") {
  console.log("No Work");
  } else if (dayOfTheWeeek === "Monday") {
  console.log("Work");
  }  else {
  console.log("Work, Work, Work");
}


// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 0;
var checkBalance = true;
var isActive = true;

// your code goes here 
//currently not finished yet!
if (checkBalance ===  false) {
  console.log("Thank you. Have a nice day!");
} else if (checkBalance ===  true || isActive === false ) {
  console.log("Your acconut is no longer active");
//} else if (checkBalance ===  true && balance > 0  ) {
//  console.log("Your balance is $" + balance + ".");
} else if (checkBalance ===  true && isActive === true && balance === 0  ) {
  console.log("Your acconut is empty.");
} else if (checkBalance ===  true && isActive === true && balance < 0  ) {
  console.log("Your balance is negative. please contact bank.");
}  else {
  console.log("Your balance is $" + balance + ".");
}

// or
if (checkBalance ===  false) {
  console.log("Thank you. Have a nice day!");
} else if (checkBalance ===  true || isActive === true && balance === 0  ) {
  console.log("Your acconut is empty.");
} else if (checkBalance ===  true || isActive === false ) {
  console.log("Your acconut is no longer active");
//} else if (checkBalance ===  true && balance > 0  ) {
//  console.log("Your balance is $" + balance + ".");
} else if (checkBalance ===  true || isActive === true && balance < 0  ) {
  console.log("Your balance is negative. please contact bank.");
}  else {
  console.log("Your balance is $" + balance + ".");
}



// change the values of `flavor`, `vessel`, and `toppings` to test your code
var flavor = "vanilla";
var vessel = "cone";
var toppings = "cookies";

// Add your code here

if (flavor ===  ("vanilla" || "chocolate") || vessel === ("cone" || "bowl")  || toppings === ("sprinkles" || "peanuts") ) {
  console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");
}  else {
  console.log("No Ice cream");
}

/*

Programming Quiz: What do I Wear? (3-7)
*/

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;

// your code goes here
if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)) {
    console.log("S");
} else if ((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength < 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63)) {
    console.log("M");
} else if ((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength < 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88)) {
    console.log("L");
} else if ((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength < 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63)) {
    console.log("XL");
} else if ((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength < 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13)) {
    console.log("2XL");
} else if (shirtWidth >= 28  && shirtLength >= 34 && shirtSleeve >= 10.13) {
    console.log("3XL");
} else {
    console.log("N/A");
}

//A value is falsy if it converts to false when evaluated in a boolean context. 
//For example, an empty String "" is falsy because, "" evaluates to false
if ("") {
    console.log("the value is truthy");
} else {
    console.log("the value is falsy");
}
Returns: "the value is falsy"

var isGoing = true;
var color;

if (isGoing) {
  color = "green";
} else {
  color = "red";
}

console.log(color);
//Prints: "green
//TIP: Using if(isGoing) is the same as using if(isGoing === true). 
//Alternatively, using if(!isGoing) is the same as using if(isGoing === false).


//The ternary operator provides you with a shortcut alternative for writing lengthy if...else statements.

conditional ? (if condition is true) : (if condition is false)

var isGoing = true;
var color = isGoing ? "green" : "red";
console.log(color);
//Prints: "green"

var adult = true;
var preorder = true;

console.log("It costs $" + (adult ? "40.00" : "20.00") + " to attend the concert. Pick up your tickets at the " + (preorder ? "will call" : "the gate") + ".");
// prints: It costs $40.00 to attend the concert. Pick up your tickets at the will call.

/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code
//currently not finished yet!
var eatsPlants = false;
var eatsAnimals = false;

var category = (eatsPlants? "herbivore" : "carnivore") && (eatsAnimals? "canivore": "herbivore")  && (eatsAnimals && eatsPlants? "omnivore":"undefined");  /* your code goes here */

console.log(category);

/*A switch statement is an another way to chain multiple else if statements,
 that are based on the same value without using conditional statements. 
 Instead, you just switch which piece of code is executed based on a value.*/

//example 1 as an else if 
var option = 3;
if (option === 1) {
  console.log("You selected option 1.");
} else if (option === 2) {
  console.log("You selected option 2.");
} else if (option === 3) {
  console.log("You selected option 3.");
} else if (option === 4) {
  console.log("You selected option 4.");
} else if (option === 5) {
  console.log("You selected option 5.");
} else if (option === 6) {
  console.log("You selected option 6.");
}

//example 1 as a switch statement 
var option = 3;
switch (option) {
  case 1:
    console.log("You selected option 1.");
  case 2:
    console.log("You selected option 2.");
  case 3:
    console.log("You selected option 3.");
  case 4:
    console.log("You selected option 4.");
  case 5:
    console.log("You selected option 5.");
  case 6:
    console.log("You selected option 6.");
}

/*Prints:
You selected option 3.
You selected option 4.
You selected option 5.
You selected option 6.*/

//example 1 as a break statement
var option = 3;
switch (option) {
  case 1:
    console.log("You selected option 1.");
    break;
  case 2:
    console.log("You selected option 2.");
    break;
  case 3:
    console.log("You selected option 3.");
    break;
  case 4:
    console.log("You selected option 4.");
    break;
  case 5:
    console.log("You selected option 5.");
    break;
  case 6:
    console.log("You selected option 6.");
    break; // technically, not needed
}
//Prints: You selected option 3.

//Falling-through

var tier = "nsfw deck";
var output = "You’ll receive "

switch (tier) {
  case "deck of legends":
    output += "a custom card, ";
  case "collector's deck":
    output += "a signed version of the Exploding Kittens deck, ";
  case "nsfw deck":
    output += "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";
  default:
    output += "one copy of the Exploding Kittens card game.";
}

console.log(output);
//Prints: You’ll receive one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and 
//one copy of the Exploding Kittens card game.

/*
 * Programming Quiz: Back to School (3-9)
 */

// change the value of `education` to test your code
var education = "no high school diploma";

// set the value of this based on a person's education
var salary;

// your code goes here
switch (education) {
 case "no high school diploma":
 salary = ("earned an average of $25,636/year");
  break;
 case "a high school diploma":
 salary = ("earned an average of $35,256/year");
  break;
 case "an Associate's degree":
 salary = ("earned an average of $41,496/year");
  break;
 case "a Bachelor's degree":
 salary = ("earned an average of $59,124/year");
  break;
 case "a Master's degree":
 salary = ("earned an average of $69,732/year");
  break;
 case "a Professional degree":
 salary = ("earned an average of $89,960/year");
  break;
  case "a Doctoral degree":
 salary = ("earned an average of $84,396/year");
     break; // technically, not needed
 
}
console.log("In 2015, a person with " + education + " earned an average of " + salary + ".");

//Example of an else if statement
// change the value of `weather` to test your conditional statements
var weather = "snow";
if (weather === "snow") {
  console.log("Bring a coat.");
} else if (weather === "rain") {
  console.log("Bring a rain jacket.");
} else {
  console.log("Wear what you have on.");
}

//Example of an if else statement
var a = 1;
var b = 2;

if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than or equal to b");
}

//Example of an else if statement
// change the value of `musicians` to test your conditional statements
var musicians = 1;

if (musicians <= 0) {
  console.log("not a group");
} else if (musicians == -1) {
  console.log("not a group");
} else if (musicians == 1) {
  console.log("solo");
} else if (musicians == 2) {
  console.log("duet");
} else if (musicians == 3) {
  console.log("trio");
} else if (musicians == 4) {
  console.log("quartet");
} else {
  console.log("this is a large group");
}


//Javascipt for making the topbanner of your page the same height of the device
//just change the '.topbanner' to the name of the class for your top banner or jumbotron.

<script> 
    $(window).resize(function() {
      $('.topbanner').height($(window).height());
    });

    $(window).trigger('resize');
  </script>
