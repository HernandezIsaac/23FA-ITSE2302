// Array to store topic of website
var siteTopics = ["Game", "Robots", "Levels", "Bosses", "Terrain"];

// Array to store days of teh week
var dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// Variables to store my first name and birth year
var firstName = "Issac";
var birthYear = 2003;

// Add value to the end of an array
siteTopics.push("Armor");
console.log("The length of the siteTopics array ", siteTopics.length);

// Loop through array using a while loop
var index = 0;
while(index < siteTopics.length)
{
    console.log(siteTopics[index]);
    index++;
}

// Reverse the given array
dayNames.reverse();

// Loop through an array using a for-loop
for(var i = 0; i < dayNames.length; i++)
{
    console.log(dayNames[i]);
}

// Remove first element of an array
dayNames.shift();

// Try to execute below code
try
{
    if(dayNames[0] === "Sunday")
    {
        // Throw an error
        throw "Error: Sunday should be missing!";
    }
// Catch a thrown error
}catch(messageThrown)
{
    console.log(messageThrown);
// Execute below block of code regardless of error
}finally
{
    console.log(firstName, "was born in the year", birthYear, ". I think the day was either a", dayNames[1], "or", dayNames[3], ".");
}