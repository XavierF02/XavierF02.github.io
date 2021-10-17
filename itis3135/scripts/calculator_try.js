var total = 0;
var tempOne = 0;
var tempTwo = 0;
var operator;
var preformingFunction = false;

function updateTotal(input)
{
	if(preformingFunction && !isNaN(input))
	{
		if(operator == "+")
		{
			total = tempOne + input;
			alert(tempOne + " + " + input + " = " + total);
			preformingFunction = false;
			total = 0;
		}
		else if(operator == "-")
		{
			total = tempOne - input;
			alert(tempOne + " - " + input + " = " + total);
			preformingFunction = false;
			total = 0;
		}
		else if(operator == "/")
		{
			total = tempOne / input;
			alert(tempOne + " / " + input + " = " + total);
			preformingFunction = false;
			total = 0;
		}
		else if(operator == "*")
		{
			total = tempOne * input;
			alert(tempOne + " * " + input + " = " + total);
			preformingFunction = false;
			total = 0;
		}
	}
	else if(input == "+" || input == "-" || input == "/" || input == "*")
	{
		operator = input;
		preformingFunction = true;
	}
	else
	{
		tempOne = input;
	}
}