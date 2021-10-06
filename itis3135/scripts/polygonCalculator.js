var number;

//If the value is not a number display the error prompt and ask then to re-enter the number. Then get the absoulte value of the input andround to the nearest int.
function validateEntry(input) {
	while (isNaN(input) || input == "" || input > 10) {
		input = prompt(input + " is not a valid input. Please input a number from 0-10.");
	}
	input = Math.abs(input);
	input = Math.round(input);
	return input;
}

//Return the name of the polygon
function getShape(number) {
	var name = "";
	if(number == 0) {
		name = "does not exist";
	} else if(number == 1) {
		name = "henagon";
	} else if(number == 2) {
		name = "digon";
	} else if(number == 3) {
		name = "trigon";
	} else if(number == 4) {
		name = "tetragon";
	} else if(number == 5) {
		name = "pentagon";
	} else if(number == 6) {
		name = "hexagon";
	} else if(number == 7) {
		name = "heptagon";
	} else if(number == 8) {
		name = "octagon";
	} else if(number == 9) {
		name = "enneagon";
	} else if(number == 10) {
		name = "decagon";
	}

	alert("A polygon with " + number + " sides is called: " + name + ".");

}

function nameThePolygon() {
	//Get value from user
	number = prompt("The xenial fawn would like to know the number of sides.");
	
	//Validate the user input;
	number = validateEntry(number);	

	//Get the name of the polygon
	getShape(number);
}