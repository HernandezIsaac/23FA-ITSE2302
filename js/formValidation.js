document.getElementById('form').addEventListener('submit', ValidateForm);

// This fuctions validates form
function ValidateForm(event)
{
    // Prevent reloading on submission of a form
    event.preventDefault();

    var returnValue = ValidateNames();
    // If names are validated then calculate total price
    if(returnValue)
    {
        // Fetch all form values
        var firstName = document.getElementById('fn').value;
        var lastName = document.getElementById('ln').value;
        var gender = document.querySelector('input[name=gender]:checked').value;
        var country = document.getElementById('country').value;
        var platforms = "";
        if(document.getElementById('pc').checked)
        {
            platforms += "PC";
        }
        if(document.getElementById('ps').checked)
        {
            platforms += ", " + "Playstation 5";
        }
        if(document.getElementById('xbox').checked)
        {
            platforms += ", " + "X-Box Series X";
        }
        
        var message = document.getElementById('message').value;

        // Display all form values
        console.log("First Name: " + firstName);
        console.log("Last Name: " + lastName);
        console.log("Gender: " + gender);
        console.log("Country: " + country);
        console.log("Platforms: " + platforms)
        console.log("Message: " + message);
        CalculatePrice();
    };
}

// Validate first name and last name
function ValidateNames()
{
    var success = true;

    // Get value of first name input field
    var val = document.getElementById('fn').value;
    if(val == "")
    {
        success = false;
        alert("First name is required.");

        // Set focus to first name input field
        document.getElementById('fn').focus();
    }else
    {
        // Get value of last name input field
        val = document.getElementById('ln').value;
        if(val == "")
        {
            alert("Last name is required.");

            // Set focus to last name input field
            document.getElementById('ln').focus();
            success = false;
        }
    }
    return success;
}

// This functions calcualtes total price
function CalculatePrice()
{
    var totalPrice = 0;

    // If pc version is selected, increase price by $60
    if(document.getElementById('pc').checked)
    {
        totalPrice += parseInt(document.getElementById('pc').value);
    }

    // If playstation 5 version is selected, increase price by $70
    if(document.getElementById('ps').checked)
    {
        totalPrice += parseInt(document.getElementById('ps').value);
    }

    // If xbox series X version is selected, increase price by $80
    if(document.getElementById('xbox').checked)
    {
        totalPrice += parseInt(document.getElementById('xbox').value);
    }

    return totalPrice;
}