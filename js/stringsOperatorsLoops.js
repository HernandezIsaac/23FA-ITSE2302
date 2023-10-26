// Variables to store strings
var variableOne = "Oscar has 5 kids and a beautiful wife named Stella. 4 of the children are identical twins and the other child is the oldest by 1 year.";
var variableTwo = "The family has 6 relatives living in the San Antonio area, and 2 more relatives who live within 100 miles of the area.";
var variableThree = "This summer they plan on traveling to El Paso to visit as many family members as possible.";

// Variables to store specific extracted values from strings
var numericalValueOne = variableOne[10];
var numericalValueTwo = variableOne [52];
var numericalValueThree = variableOne[variableOne.length - 7];

// Variables to store specific extracted values from strings
var numericalValueFour = variableTwo[15];
var numericalValueFive = variableTwo[63];
var numericalValueSix = variableTwo[variableTwo.length - 22] + variableTwo[variableTwo.length - 21] + variableTwo[variableTwo.length - 20];

// Variables to store specific extracted values from strings
var numericalValueSixA = numericalValueSix[0] + numericalValueSix[1];
var numericalValueSixB = numericalValueSix[2];

// Variables to store integer values parsed from a string
numericalValueOne = parseInt(numericalValueOne, 10);
numericalValueTwo = parseInt(numericalValueTwo, 10);
numericalValueThree = parseInt(numericalValueThree, 10);

// Variables to store integer values parsed from a string
numericalValueFour = parseInt(numericalValueFour, 10);
numericalValueFive = parseInt(numericalValueFive, 10);
numericalValueSixA = parseInt(numericalValueSixA, 10);
numericalValueSixB = parseInt(numericalValueSixB, 10);

// Variable to store sum of integers
var sumTotal = numericalValueOne + numericalValueTwo + numericalValueThree;
sumTotal += numericalValueFour + numericalValueFive + numericalValueSixA

console.log("The variable sumTotal is storing " + sumTotal);

// variable to store substring
var sanAntonio = variableTwo.substring(41, 52);

// variable to store new string after replacing certain string in another string
variableThree = variableThree.replace("El Paso", sanAntonio);

console.log(variableThree);

// While loop to print certain string 10 times.
while(numericalValueThree <= numericalValueSixA)
{
    console.log("I saw " + numericalValueThree + " car(s) on my trip.");
    numericalValueThree++;
}