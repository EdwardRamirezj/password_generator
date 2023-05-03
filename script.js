// variables and arrays for code generator that will include uppercase, lowercase, numbers, and special characters

var characterLength = 8;
var optionArray = []

var specialCharactersArray = [ '!', '@', '#', '$', '%', '(', ')', '-', '_', '=', '+', '.', '/', '?', '<',];
var lowerCaseArray = ['a','b', 'c', 'd','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',]
var upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var numberArray= ['0','1','2','3','4','5','6','7','8','9',]

// Variable for generate button
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var correctPrompts = getPropmts();
var passwordText = document.querySelector("#password");

  if (correctPrompts){
  var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}
// A fucntion to display password when the button is clicked
function generatePassword() {
  var password = "";
  for( var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * optionArray.length);
    password = password + optionArray[randomIndex];
  }
  return password;
}

// A fuction to prompt the user on what they want on their password
function getPropmts() {
  optionArray = [];

  characterLength = parseInt(prompt("How many characters do you want your password to be? 8 - 120 Characters"));
 

  // If false statement  alert user that character length must be within 8-120 characters

    if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("character length bas to be between 8-120 characters.");
    return false;
  }
// prompt user with questions
  if (confirm("Do you want lowercase letters in your password?")) {
    optionArray = optionArray.concat(lowerCaseArray); 

  }

  if (confirm("Do you want upperrcase letters in your password?")) {
    optionArray = optionArray.concat(upperCaseArray); 

  }

  if (confirm("Do you want numbers in your password?")) {
    optionArray = optionArray.concat(numberArray); 

  }

  if (confirm("Do you want special characters in your password?")) {
    optionArray = optionArray.concat(specialCharactersArray); 

  }
  return true;
}
