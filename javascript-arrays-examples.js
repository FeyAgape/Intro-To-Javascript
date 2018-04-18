//Arrays

//Arrays: An array is useful because it stores multiple values into a single, organized data structure. 
//You can define a new array by listing values separated with commas between square brackets []
//e.g
var donuts = ["glazed", "chocolate frosted", "cinnamon", "sprinkled"];

//But strings aren’t the only type of data you can store in an array. 
//You can also store numbers, booleans… and really anything!

// creates a `mixedData` array with mixed data types
var mixedData = ["abcd", 1, true, undefined, null, "all the things"];
//You can even store an array in an array to create a nested array!

// creates a `arraysInArrays` array with three arrays
var arraysInArrays = [[1, 2, 3], ["Julia", "James"], [true, false, true, false]];
//Nested arrays can be particularly hard to read, so it's common to write them on one line, using a newline after each comma:

var arraysInArrays = [
  [1, 2, 3], 
  ["Julia", "James"], 
  [true, false, true, false]
];

//example 
var donuts = ["glazed", "powdered", "sprinkled"];
console.log(donuts[0]); // "glazed" is the first element in the `donuts` array
//Prints: "glazed"

//Finally, if you want to change the value of an element in array, you can do so by setting it equal to a new value.

donuts[1] = "glazed cruller"; // changes the second element in the `donuts` array to "glazed cruller"
console.log(donuts[1]);
//Prints: "glazed cruller"

//Examples
/*
 * Programming Quiz: Building the Crew (6-2)
 */

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

// your code goes here
var crew = [captain, second, pilot, companion, mercenary, mechanic];
console.log(crew);
//prints: [ 'Mal', 'Zoe', 'Wash', 'Inara', 'Jayne', 'Kaylee' ]

/*
 * Programming Quiz: The Price is Right (6-3)
 Change the prices of the 1st, 3rd, and 7th elements in the array, and 
 print out the prices array to the console.
 */

var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

// your code goes here
prices[0] = 2.23;
prices[2] = 1.23;
prices[6] = 4.23;

console.log(prices);
//prints: [ 2.23, 48.11, 1.23, 8.5, 9.99, 1, 4.23, 67 ]

//Arrays properties and methods

//property - Length: can be used to get the number of elements in an array
//methods - REVERSE: reversed the order of the elements in an array
//methods - SORT: sorts the elements in an array
//methods - PUSH & POP: two methods that allow us to add and remove elements from an array
//methods - Splice (): allow us to add and remove elements from  anywhere within an array

//Array.length
//You can find the length of an array by using its length property.

var donuts = ["glazed", "powdered", "sprinkled"];
console.log(donuts.length);
//Prints: 3

//Push
//You can use the push() method to add elements to the end of an array.
var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller", "cinnamon sugar", "sprinkled"];
//Then, you can push donuts onto the end of the array using the push() method.

donuts.push("powdered"); // pushes "powdered" onto the end of the `donuts` array
//Also, the push() method returns the length of the array after an element has been added.
//Returns: 7
//donuts array: ["glazed", "chocolate frosted", "Boston creme", "glazed cruller", "cinnamon sugar", "sprinkled", "powdered"]

//Alternatively, you can use the pop() method to remove elements from the end of an array.

var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller", "cinnamon sugar", "sprinkled", "powdered"];

donuts.pop(); // pops "powdered" off the end of the `donuts` array
donuts.pop(); // pops "sprinkled" off the end of the `donuts` array
donuts.pop(); // pops "cinnamon sugar" off the end of the `donuts` array
//Returns: "cinnamon sugar"
//donuts array: ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"]
//pop() will always remove the last element from the end of the array. 
//Also, pop() returns the element that has been removed in case you need to use it.

var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];
donuts.splice(1, 1, "chocolate cruller", "creme de leche"); // removes "chocolate frosted" at index 1 and adds "chocolate cruller" and "creme de leche" starting at index 1
//Returns: ["chocolate frosted"]
//donuts array: ["glazed", "chocolate cruller", "creme de leche", "Boston creme", "glazed cruller"]

/*
 * Programming Quiz: Colors of the Rainbow (6-4)
 * var rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
 * Using only the splice() method, insert the missing colors into the array, and remove the color "Blackberry" by following these steps:
 * Remove "Blackberry"
 * Add "Yellow" and "Green"
 * Add "Purple"
 */

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

// your code goes here
var removed = rainbow.splice(2, 1, "Yellow", "Green");
var add = rainbow.splice(5, 0, "Purple")

console.log(rainbow);

// or

rainbow.splice(2, 1, "Yellow", "Green");
rainbow.splice(5, 0, "Purple");

console.log(rainbow);

/*
 * Programming Quiz: Quidditch Cup (6-5)
 */

// your code goes here
function hasEnoughPlayers (team) {
    if (team.length >= 7) {
    return true;
} else {
    return false;
}
}
var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));

//or

function hasEnoughPlayers(team) {
    return team.length >= 7;
} 

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));


/*
 * Programming Quiz: Joining the Crew (6-6)
 * Later in the show, Mal takes on three new crew members named "Simon", "River", and "Book". 
 * Use the push() method to add the three new crew members to the crew array.
 */

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

// your code goes here
crew.push(doctor, sister,shepherd); // pushes "powdered" onto the end of the `donuts` array


//the code you could write to reverse the array above:
reverseMe.reverse();
var reverseMe = ["h", "e", "l", "l", "o"];
//Returns: [ 'o', 'l', 'l', 'e', 'h' ]

//the sort() method can sort an array.
var sortMe = [2, 1, 10, 7, 6];
sortMe.sort();
//Returns: [1, 10, 2, 6, 7]
//Did you notice that 10 appears before 2? Traditionally, the number 2 comes before 10. 
//But in the .sort() method, numbers are converted to Unicode strings, so 10 comes before 2 in Unicode order.

//shift() will remove the first element from an array.
//splice() can be used if you specify the index of the first element, and indicate that you want to delete 1 element.
//Keep in mind that the slice() method allows you to create a copy of the array between two indices. 
//Though you could just exclude the index of the first element, this approach does not directly modify a given array.

//You can combine the elements in an array to form a string using the join() method.
var turnMeIntoAString = ["U", "d", "a", "c", "i", "t", "y"];
turnMeIntoAString.join('');
//Returns: Udacity


//Array loops
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];
//and we decided to make all the same donut types, but only sell them as donut holes instead, 
//we could write the following code:

donuts[0] += " hole";
donuts[1] += " hole";
donuts[2] += " hole";

//donuts array: ["jelly donut hole", "chocolate donut hole", "glazed donut hole"]

//or 

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// the variable `i` is used to step through each element in the array
for (var i = 0; i < donuts.length; i++) {
    donuts[i] += " hole";
    donuts[i] = donuts[i].toUpperCase();
}
//donuts array: ["JELLY DONUT HOLE", "CHOCOLATE DONUT HOLE", "GLAZED DONUT HOLE"]
//in this example, the variable i is being used to represent the index of the array. 
//As i is incremented, you are stepping over each element in the array starting from 
//0 until donuts.length - 1 (donuts.length is out of bounds).


//Array forEach() loop
//forEach() method can take up to three parameters.
function itAwesome (elecment, index, array) {
	console.log("Element: " + element);
	console.log("Index: " + index);
	console.log("Array: " + array);
}
myArray.forEach(itAwesome);

//example
words = ["cat", "in", "hat"];
words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});
//Prints:
//Word 0 in cat,in,hat is cat
//Word 1 in cat,in,hat is in
//Word 2 in cat,in,hat is hat

//The forEach() method gives you an alternative way to iterate over an array, 
//and manipulate each element in the array with an inline function expression.

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
});
//Prints:
//JELLY DONUT HOLE
//CHOCOLATE DONUT HOLE
//GLAZED DONUT HOLE

//Notice that the forEach() method iterates over the array without the need of an explicitly defined index.

/*
 * Programming Quiz: Another Type of Loop (6-8)
 *
 * Use the existing `test` variable and write a `forEach` loop
 * that adds 100 to each number that is divisible by 3.
 *
 * Things to note:
 *  - you must use an `if` statement to verify code is divisible by 3
 *  - you can use `console.log` to verify the `test` variable when you're finished looping
 */

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

// Write your code here
test.forEach(function(currentValue, index, array) {
    if (currentValue % 3 === 0)
        array[index] += 100;
});
console.log(test);

//Thiers are different way to loop an array
//eg. a for loops, which are very versatile
var myArray = [1,2,3,4,5];
for (var i=0; i<= myArray.length; i=i+2) {
	console.log(myArray[i]);
	if (i==2) {
		break;
	}
}
//Prints: 1 and 3

//eg. a forEach(func), is a good oprion if your know your going to be looping over every element in your array
//however less versatility
var myArray = [1,2,3,4,5];
myArray.forEach(function(elem) {
		console.log(elem);
	});
//Prints: 1,2,3,4,5

//eg. a .map(func) is also an array method, 
//that allows you to create a new array with the new values your function calculated
var myArray = [1,2,3,4,5];
var newArray = myArray.map(function(elem) {
		elem = elem + 100
		return elem;
	});
console.log(newArray);
// prints [101, 102, 103, 104, 105]

//Example
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

var holedDonuts = donuts.map(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  return donut;
});

console.log(holedDonuts);
//Prints: ["JELLY DONUT HOLE", "CHOCOLATE DONUT HOLE", "GLAZED DONUT HOLE"]

/*
 * Programming Quiz: I Got Bills (6-9)
 *
 * Use the .map() method to take the bills array below and create a second array
 * of numbers called totals. The totals array should contains each amount from the
 * bills array but with a 15% tip added. Log the totals array to the console.
 *
 * For example, the first two entries in the totals array would be:
 *
 * [57.76, 21.99, ... ]
 *
 * Things to note:
 *  - each entry in the totals array must be a number
 *  - each number must have an accuracy of two decimal points
 */

var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];
var totals = bills.map(function(bill){
bill *=1.15;
return Number(bill.toFixed(2));
});

console.log(totals);


//Arrays in Arrays : nested Arrays
//eg.
var grid = [
[1,1,3,4,5],
[1,5,3,4,5],
[1,5,3,4,5],
[1,3,3,4,5],
[1,2,2,4,5]
];

//you can use a single for loop to access each array
for (var r=0; r < grid.length; r++) {
		console.log(grid[r]);
}

//or you can use a nested for loops, or a loop inside of a loop
for (var r=0; r< grid.length; r++) {
	for (var c=0; c< grid.length; c++) {
		console.log(grid[r][c]);
	}
}


var donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"]
];
//If you wanted to loop over the donut box and display each donut (along with its position in the box!) 
//you would start with writing a for loop to loop over each row of the box of donuts:

var donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"]
];

// here, donutBox.length refers to the number of rows of donuts
for (var row = 0; row < donutBox.length; row++) {
  console.log(donutBox[row]);
}
//Prints:
//["glazed", "chocolate glazed", "cinnamon"]
//["powdered", "sprinkled", "glazed cruller"]
//["chocolate cruller", "Boston creme", "creme de leche"]

//Since each row is an array of donuts, you next need to set up an inner-loop to loop over each cell in the arrays.

for (var row = 0; row < donutBox.length; row++) {
  // here, donutBox[row].length refers to the length of the donut array currently being looped over
  for (var column = 0; column < donutBox[row].length; column++) {
    console.log(donutBox[row][column]);
  }
}
//Prints:
//"glazed"
//"chocolate glazed"
//"cinnamon"
//"powdered"
//"sprinkled"
//"glazed cruller"
//"chocolate cruller"
//"Boston creme"
//"creme de leche"

*
 * Programming Quiz: Nested Numbers (6-10)
 *
 *   - The `numbers` variable is an array of arrays.
 *   - Use a nested `for` loop to cycle through `numbers`.
 *   - Convert each even number to the string "even"
 *   - Convert each odd number to the string "odd"
 */

var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

// your code goes here
for(var r = 0; r < numbers.length; r++){
for(var c = 0; c < numbers[r].length; c++){
if(numbers[r][c] % 2 === 0){
numbers[r][c] = "even";
}else{
numbers[r][c] = "odd";
}
}
}
console.log(numbers);