// Variables to store user input
var numberOne;
var numberTwo;

// ask user to enter a number between certain range
numberOne = window.prompt("Enter a number between 1 and 10");

// convert the number from string to int
numberOne = parseInt(numberOne);

// keep asking user to enter number as long as it is outside the range
while(numberOne < 1 || numberOne > 10)
{
    alert("Value must be between 1 and 10.");
    numberOne = window.prompt("Enter a number between 1 and 10");
    numberOne = parseInt(numberOne);
}

// ask user to enter a number between certain range
numberTwo = window.prompt("Enter a number between 1 and 20");

// convert the number from string to int
numberTwo = parseInt(numberTwo);

// keep asking user to enter number as long as it is outside the range
while(numberTwo < 1 || numberTwo > 20)
{
    alert("Value must be between 1 and 20.");
    numberTwo = window.prompt("Enter a number between 1 and 20");
    numberTwo = parseInt(numberTwo);
}

// multiply 2 numbers
var numberThree = numberOne * numberTwo;

/* If the remainder of the number after deviding it by 2 is 0, then 
it's an even number else it is an odd number.*/
if(numberThree % 2 === 0)
{
    console.log("Multiplication value is even.");
}else
{
    console.log("Multiplication value is odd.");
}

