var people = ["Xavier Faulkner", "Nick Fury", "Tony Stark", "Natasha Romanoff", "Bruce Banner", "Shang-chi", "Scott Lang"];
var length = people.length;
var salaries = [0,0,0,0,0,0,0];

var dropDown = document.getElementById("employeeNames");
var results_table = document.getElementById("results_table");
var salaryTableBody = document.getElementById("salaryTableBody");
var results = document.getElementById("results");

dropDown.focus();

for(var i = 0; i < people.length; i++) 
{
	var name = people[i];
	dropDown.innerHTML += "<option value=\"" + name + "\">" + name + "</option>";
}

var $ = function (id)
{
return document.getElementById(id);
};

function addSalary()
{
	var salaryInput = document.getElementById("employeeSalary").value;
	var employeeName = document.getElementById("employeeNames").selectedIndex;
	if(employeeName == 0)
	{
		alert("Please select an employee.");
		return;
	}
	else if(isNaN(salaryInput) || salaryInput == "" || !Number.isInteger(Number(salaryInput)))
	{
		alert("Please enter a valid number in the salary field.");
		return;
	}
	salaries[employeeName-1] = salaryInput;
	results_table.setAttribute("hidden", true);
	results.setAttribute("hidden", true);
	dropDown.focus();
}

function displaySalary() 
{
	salaryTableBody.innerHTML = "";
	for(var i = 0; i < people.length; i++) {
		salaryTableBody.innerHTML += "<tr><td>" + people[i] + "</td><td>$" + salaries[i] + "</td></tr>"
	}
	results_table.removeAttribute("hidden");
}

function displayResults() 
{
	var sum = 0;

	for(var i = 0; i < salaries.length; i++)
	{
		sum += parseInt(salaries[i]);
	}

	var averageSalary = sum / salaries.length;

	var highestSalary = parseInt(salaries[0]);	

	for(var i = 1; i < salaries.length; i++)
	{
		if(highestSalary < parseInt(salaries[i]))
		{
			highestSalary = parseInt(salaries[i]);
		}
	}

	results.innerHTML = "";
	results.innerHTML += "<br><h2>Results</h2>";
	results.innerHTML += "<p>Average salary: " + averageSalary + "</p>";
	results.innerHTML += "<p>Highest salary: $" + highestSalary + "</p><br>";
	results.removeAttribute("hidden");
	console.log(averageSalary);
	console.log(highestSalary);
}

window.onload = function ()
{
$("displayResults").onclick = displayResults;
$("addSalary").onclick = addSalary;
$("displaySalary").onclick = displaySalary;

};