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