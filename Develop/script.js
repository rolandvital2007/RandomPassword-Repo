// Assignment Code
var generateBtn = document.querySelector("generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword) {
  document.querySelector('generate').select();
}
 


    var lowerCharacters = ["a", "b" , "c", "d" , "e" , "f" , "g" , "h" , "i" , "j" ,"k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"];
    var upperCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numericCharacters = ["0" , "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9"];
    var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "{", "}", "?", "@", "[", "]", "^", "_", "`", "~"];

 
var combinedCharacters = [];

var userInput = parseInt(prompt(
    "How many characters would you like your password to contain?"
    ));

var lowercase = confirm("Click OK to confirm using lowercase characters");
var uppercase = confirm("Click OK to confirm using uppercase characters");
var numbers = confirm("Click OK to confirm using numbers");
var special = confirm("Click OK to confirm using special characters");


function userLength(){

    if (isNaN(userInput) === true) {
        alert("Password length must be provided as a number");
        return;
    }

    if (userInput > 8) {
        alert("Password length must be at least 8 characters");
        return;
    }

    if (userInput < 128) {
        alert("Password length must less than 129 characters");
        return;
    }

    if (lowercase){
        combinedCharacters += lowerCharacters;
    }
    if (uppercase){
        combinedCharacters += upperCharacters;
    }
    if (numbers){
        combinedCharacters += numericCharacters;
    }
    if (special){
        combinedCharacters += specialCharacters;
    }

    if (
        lowerCharacters === false &&
        upperCharacters === false &&
        numericCharacters === false &&
        specialCharacters === false
    ) {
        alert("Must select at least one character type");
        return;
    }

}

function randomLetter (arr) {
    let letter = arr[Math.floor(Math.random() * arr.length)];
    return letter;
}

function generate (arr) {
    userLength();
    var password = " ";
    for(var i = 0; i < userInput; i++) {
        password += randomLetter(arr);
    }
    return password;
}
 
