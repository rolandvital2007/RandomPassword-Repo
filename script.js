
// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);


//var generateBtn = document.querySelector("#generate");


// Grab reference to textarea ID 
//var box = document.getElementById('passTextBox');

// Fire an on click event when the button is clicked and set the textContent to the generated password
//generateBtn.onclick = function(){
//var pass = generate(combinedCharacters);
//box.textContent = pass;
//}

// Copy to clipboard event
//document.querySelector('#copyBtn').addEventListener('click', function () {
//document.querySelector('#passTextBox').select();
//document.execCommand('copy');
//});
// Add event listener to generate button



// started with declaring arrays to pull information from 
// build the function to prompt user for input 
// prompt 


// // The user will be prompted to choose from the following password criteria
// // Length (must be between 8 and 128 characters)
// // Validate user input and ensure that at least one character type is selected.
// // Once all prompts are answered, the user will be presented with a password matching the answered prompts. Displaying the generated password in an alert is acceptable, but attempt to write the password to the page instead.


var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var combinedCharacters = ["please click generate password again"];

// Create user-slected criteria
var userInput;


// confirm boxes
var lowercase;
var uppercase;
var numbers;
var special;

function userLength() {

    // Conditional statement to check if password length is a number. Prompts end if this evaluates false
    if (isNaN(userInput) === true) {
        alert("Password length must be provided as a number");
        return;
    }

    // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
    else if (userInput < 8) {
        alert("Password length must be at least 8 characters");
        return;
    }

    // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
    else if (userInput > 128) {
        alert("Password length must less than 128 characters");
        return;
    }

    if (lowercase) {
        combinedCharacters += alphaLower;
    }
    if (uppercase) {
        combinedCharacters += alphaUpper;
    }
    if (numbers) {
        combinedCharacters += number;
    }
    if (special) {
        combinedCharacters += specialChar;
    }

    // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
    if (
        alphaLower === false &&
        alphaUpper === false &&
        number === false &&
        specialChar === false
    ) {
        alert("Must select at least one character type");
        return;
    }

}


function randomLetter(arr) {
    let letter = arr[Math.floor(Math.random() * arr.length)];
    return letter;
}

// Loop through array 
function generate(arr) {
    userLength();
    var password = "";
    for (var i = 0; i < userInput; i++) {
        password += randomLetter(arr);
    }
    return password;

}


document.querySelector("#generate").onclick = function () {
    userInput = parseInt(prompt(
        "How many characters would you like your password to contain?"
    ));
    lowercase = confirm('Click OK to confirm using lowercase characters');
    uppercase = confirm('Click OK to confirm using uppercase characters');
    numbers = confirm('Click OK to confirm using numbers');
    special = confirm('Click OK to confirm using special characters');
    var box = document.getElementById('password');
    var pass = generate(combinedCharacters);
    box.textContent = pass;

    document.querySelector('#password').select();
    document.execCommand('copy');
}

// started with declaring arrays to pull information from 
// build the function to prompt user for input 
    // prompt 
