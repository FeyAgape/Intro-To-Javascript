// Logical operators can be used in conjunction with boolean values (true and false) to create complex logical expressions.
// By combining two boolean values together with a logical operator, 
// you create a logical expression that returns another boolean value. 
// Here’s a description of the different logical operators:
// &&  Logical AND value1 && value2  Returns true if both value1 and value2 evaluate to true.
// ||  Logical OR  value1 || value2  Returns true if either value1 or value2 (or even both!) evaluates to true.
// ! Logical NOT !value1 Returns the opposite of value1. If value1 is true, then !value1 is false.


!(4 === 4) && "STRing" === "STRing"
// Returns: false 

//Example of an if statement using a logical operator
var colt = "not busy";
var weather = "nice";

if (colt === "not busy" && weather === "nice") {
  console.log("go to the park");
}

//Example of an if statement using a logical operator

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


var balance = 0;
var checkBalance = true;
var isActive = true;

// your code goes here
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


/// change the values of `flavor`, `vessel`, and `toppings` to test your code
var flavor = "vanilla";
var vessel = "cone";
var toppings = "cookies";

// Add your code here
// Add your code here

if (flavor ===  ("vanilla" || "chocolate") || vessel === ("cone" || "bowl")  || toppings === ("sprinkles" || "peanuts") ) {
  console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");
}  else {
  console.log("No Ice cream");
}






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
