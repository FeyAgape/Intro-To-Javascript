//Loops lets you iterate over values and repeatedly run a block of code

//while loop

var x =1;
while (x <= 10000) {
  console.log(x + "mississippi!");
  x= x+1;
}

/*Three main pieces of information that any loop should have are:

When to start: The code that sets up the loop — defining the starting value of a variable for instance.
When to stop: The logical condition to test whether the loop should continue.
How to get to the next item: The incrementing or decrementing step — for example, x = x * 3 or x = x - 1 */

var start = 0; // when to start
while (start < 10) { // when to stop
  console.log(start);
  start = start + 2; // how to get to the next item
}

//Prints:
//0
//2
//4
//6
//8

var x = 10;
while (x <= 25) {
  console.log('Printing out x = ' + x);
  x = x + 2;
}
//Prints:
//8

//Don't run this code!

while (true) {
  console.log("true is never false, so I will never stop!");
}
//If you did try to run that code in the console, you probably crashed your browser tab.

/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

while ( x <= 20) {
if ( x % 3 === 0 && x % 5 === 0) {
    console.log ("JuliaJames");
} else if ( x % 3 === 0) {
    console.log ("Julia");
} else if ( x % 5 === 0) {
    console.log("James");
} else {
    console.log(x);
}
x = x + 1;
} 

//or 

var x = 1;
while (x <= 20) {
console.log(x % 3 === 0 ? (x % 5 === 0 ? "JuliaJames" : "Julia")
                        : (x % 5 === 0 ? "James" : x));
x = x + 1;
}


/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;
while (num > 0) {
if (num === 1) {
console.log(num + ' bottle of juice on the wall! ' + num + ' bottle of juice! Take one down, pass it around… ' + (num-1) + ' bottle of juice on the wall!');
}
else if (num === 2){
console.log(num + ' bottle of juice on the wall! ' + num + ' bottle of juice! Take one down, pass it around… ' + (num-1) + ' bottle of juice on the wall!');
}
else {
console.log(num + ' bottle of juice on the wall! ' + num + ' bottle of juice! Take one down, pass it around… ' + (num-1) + ' bottle of juice on the wall!');
}
num --;
}


/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

// your code goes here
var checkpoint = {
    50: "Orbiter transfers from ground to internal power",
    31: "Ground launch sequencer is go for auto sequence start",
    16: "Activate launch pad sound suppression system",
    10: "Activate main engine hydrogen burnoff system",
    6: "Main engine start",
    0: "Solid rocket booster ignition and liftoff!"
};
var seconds = 60;
while (seconds >= 0) {
    console.log(checkpoint[seconds] || `T-${seconds} seconds`);
    seconds--;
}
//or
var seconds =60;
var checkpoint ="";

while(seconds >= 0){
switch (seconds){
case 50 : checkpoint = "Orbiter transfers from ground to internal power";
break;
case 31: checkpoint = "Ground launch sequencer is go for auto sequence start";
break;
case 16 : checkpoint = "Activate launch pad sound suppression system";
break;
case 10 : checkpoint = "Activate main engine hydrogen burnoff system";
break;
case 6 : checkpoint = "Main engine start";
break;
case 0 : checkpoint = "Solid rocket booster ignition and liftoff!";
break;
default : checkpoint = "T-"+seconds + " seconds";
}
console.log(checkpoint);
seconds --;

}


//For loop
/*The for loop explicitly forces you to define the start point, stop point, and each step of the loop. 
In fact, you'll get an Uncaught SyntaxError: Unexpected token ) if you leave out any of the three required pieces.*/
//for loop method
for ( start; stop; step ) {
  // do this thing
}
//example 1
for (var x = 0; x < 6; x = x + 1) {
  console.log ("Printing out x = " + x);
}
//example 2 
for (var x= 5; x < 10; x++) {
    console.log(x);
}
//example 3
for (var k = 0; k < 200; k++) {
    console.log(k);
}

//a decrement for loop
for (var x = 9; x >= 1; x = x - 1) {
    console.log("hello " + x);
}
//Prints hello 9 , hello 8, hello 7, hello 6, hello 5, hello 4, hello 3, hello 2, hello 1

//Nested loop
//Did you know you can also nest loops inside of each other? 
//Paste this nested loop in your browser and take a look at what it prints out:

for (var x = 0; x < 5; x = x + 1) {
  for (var y = 0; y < 3; y = y + 1) {
    console.log(x + "," + y);
  }
}
//example 2

for (var x = 0; x < 5; x++);{
for( var y = 0; y < 3; y++){
console.log(x + "," + y);
  }
}

//Arithmetic operators 
x++ or ++x // same as x = x + 1 
x-- or --x // same as x = x - 1
x += 3 // same as x = x + 3
x -= 6 // same as x = x - 6
x *= 2 // same as x = x * 2
x /= 5 // same as x = x / 5

//example

var solution = 12;
for(var x = 12; x > 1; x--){
    solution *= x-1;
}
console.log(solution);
//prints 479001600

var solution = 1;
for (var x = 1; x <= 12; x++) {
    solution *= x;
}
console.log(solution);
//prints 479001600

/*
 * Programming Quiz: Find my Seat (4-8)
 * 
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0 
 * The last row-seat combination will be 25-99
 * 
 * Things to note: 
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

// Write your code here
for( var x = 0; x < 26; x++){
    for( var y = 0; y <=99; y++) {
        console.log(x + "-" + y)
    }
}