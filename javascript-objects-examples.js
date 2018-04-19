//Objects: are a data structure in Js that lets you store data about a particular thing
//i also helps you keep track of that data by using a "key"
/**
It’s worth noting that while we can represent real-world objects as JavaScript objects, 
the analogy does not always hold. This is a good starting place for thinking about the structure 
and purpose of objects, but as you continue your career as a developer, 
you’ll find that JavaScript objects can behave wildly different than real objects.
*/

//typeof is an operator that returns the name of the data type that follows it:

typeof "hello" // returns "string"
typeof [1, 2, 3] // returns "object" (Arrays are a type of object)
typeof function hello() { } // returns "function"

var umbrella = {
  color: "pink"
  isOpen: false,
  open: function() {
    if (umbrella.isOpen === true) {
      return "The umbrella s already opened!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella";
    }
  }
  // your code goes here
    close: function() { 
    if (umbrella.isOpen === false) {
      return "The umbrella is already closed!";
    } else {
      umbrella.isOpen = false;
      return "Julia closes the umbrella!";
    }
   }
};


//example of an object
var sister = {
  name: "Sarah", 
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true
};

/*
The syntax you see above is called object-literal notation. There are some important things you need to remember when you're structuring an object literal:

The "key" (representing a property or method name) and its "value" are separated from each other by a colon
The key: value pairs are separated from each other by commas
The entire object is wrapped inside curly braces { }.
*/
// two equivalent ways to use the key to return its value
//Using sister["parents"] is called bracket notation (because of the brackets!)
sister["parents"] // returns [ "alice", "andy" ]
//using sister.parents is called dot notation (because of the dot!).
sister.parents // also returns ["alice", "andy"]

var sister = {
  name: "Sarah",
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true,
  paintPicture: function() { return "Sarah paints!"; }
};

sister.paintPicture();
//Returns: "Sarah paints!"

//and you can access the name of my sister by accessing the name property:

sister.name
//Returns: "Sarah"

//Naming convention
//feel free to use upper and lowercase numbers and letters
//dont use number to start your object property
//you don't need to wrap the string in quotes!
//if it's a multi-word property, dont use space in your object property or use hypen (-), use camelCase
//eg.
var richard = {
  "1stSon": true;
  "loves-snow": true;
};

richard.1stSon // error
richard.loves-snow // error

//Objects are one of the most important data structures in JavaScript.
/*
They have properties (information about the object) and methods (functions or capabilities the object has). 
Objects are an incredibly powerful data type and you will see them all over the place when working with JavaScript, 
or any other object-oriented programming language.
*/

//Object literals, methods, and properties
//You can define objects using object-literal notation:

var myObj = { 
  color: "orange",
  shape: "sphere",
  type: "food",
  eat: function() { return "yummy" }
};

myObj.eat(); // method
myObj.color; // property

/*
 * Programming Quiz: Menu Items (7-2)
 * Create a breakfast object to represent the following menu item:
 * The Lumberjack - $9.95
 * eggs, sausage, toast, hashbrowns, pancakes
 * The object should contain properties for the name, price, and ingredients.
 */

// your code goes here
 var breakfast = {
   name: "The Lumberjack",
   price: "$9.95",
   ingrediens: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"],
   };


/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 * add a printAccountSummary() method that returns the following account message:
 * Welcome!
 * Your balance is currently $1000 and your interest rate is 1%.
 */

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    // your code goes here
   printAccountSummary: function (amount) {
        return "Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%.";
    }
};

console.log(savingsAccount.printAccountSummary());

/*
 * Programming Quiz: Facebook Friends (7-5)
 * Create an object called facebookProfile. The object should have 3 properties:
 * your name
 * the number of friends you have, and
 * an array of messages you've posted (as strings)
 * The object should also have 4 methods:
 * postMessage(message) - adds a new message string to the array
 * deleteMessage(index) - removes the message corresponding to the index provided
 * addFriend() - increases the friend count by 1
 * removeFriend() - decreases the friend count by 1
 */

// your code goes here
var facebookProfile = {
   name: "fey",
    friends: "20",
    messages: ["yer", "no", "lets"],
    postMessage: function(message) {
        facebookProfile.messages.push(message); 
    },
    deleteMessage: function(index) { 
        facebookProfile.messages.splice(index, 1); 
    },
    addFriend: function() { 
        facebookProfile.friends++; 
    },
    removeFriend: function() { 
        facebookProfile.friends--; 
    } 
};

console.log(facebookProfile.friends); // 0
console.log(facebookProfile.messages); // []

facebookProfile.addFriend();
console.log(facebookProfile.friends); // 1
facebookProfile.removeFriend();
console.log(facebookProfile.friends); // 0

facebookProfile.postMessage("Hello");
facebookProfile.postMessage("World");
console.log(facebookProfile.messages); // [ 'Hello', 'World' ]
facebookProfile.deleteMessage(0);
console.log(facebookProfile.messages); // [ 'World' ]

/*
 * Programming Quiz: Donuts Revisited (7-6)
 * Use the forEach() method to loop over the array and print out the following donut summaries using console.log.
 * Jelly donuts cost $1.22 each
 * Chocolate donuts cost $2.45 each
 * Cider donuts cost $1.59 each
 * Boston Cream donuts cost $5.99 each
 */

var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];
//
donuts.forEach(function(donuts) {
    console.log (donuts.type + " donuts cost $" + donuts.cost + " each");
});
