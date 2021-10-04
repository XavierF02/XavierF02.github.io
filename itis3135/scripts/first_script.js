var userName = prompt("Please enter your name");
var userFeelings = prompt("How are you doing today?");
var companyName = "Xenial Fawn";
var today = new Date();

document.write("<p>Today is " + today.toDateString() + ", and the time is " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
document.write("<br>");
document.write(companyName + " welcomes you, " + userName + "!");
document.write("<br>")
document.write("We're glad you're doing " + userFeelings + ".</p>");

function calcTax() {
	var subtotal = parseInt(prompt("Please enter the subtotal."));
	var taxPercent = parseFloat(prompt("Please enter the tax rate.", "0.07"));
	var taxAmount = subtotal * taxPercent;
	var total = subtotal + taxAmount;
	alert("The total after tax is: " + total);
}


function calcPerimeter() {
	var width = prompt("What is the width of the rectangle?");
	var length = prompt("What is the length of the rectangle?");
	var perimeter = (2 * width) + (2 * length);
	alert("The perimeter of the rectangle is: " + perimeter);
}

function calcArea() {
	var width = prompt("What is the width of the room?");
	var length = prompt("What is the length of the room?");
	var squareFoot = width * length;
	alert("The area of the room is: " + squareFoot);
}

function calcColor() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	alert("Your random color is : RGB(" + red + ", " + green + ", " + blue + ")");
}

function calcTheme() {
	var themeNumber = Math.floor(Math.random() * 5) + 1;
	var theme = "";
	
	if(themeNumber == 1) {
		theme = "Modern";
	} else if(themeNumber == 2) {
		theme = "Industrial";
	} else if(themeNumber == 3) {
		theme = "Rustic";
	} else if(themeNumber == 4) {
		theme = "Contemporary";
	} else if(themeNumber == 5) {
		theme = "Urban";
	}

	alert("Your random design theme is: " + theme + "!")
}