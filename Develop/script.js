// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password Input variables listed below, they are global
var uppercaseKeys = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
var lowercaseKeys ="abcdefghijklmnopqrstuvwxyz";
var symbolsKeys ="!@#$%^&*()?.<\>|=+:;,[-_]"
var numericKeys ="0123456789"
var input =[];
var randomPassword = ""

// Event Listener to generate button, Call to Action
generateBtn.addEventListener("click", writePassword);

//Password Input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Below is the main function running the password generator
//First prompt that decides the length of the password between 8-128 characters
function generatePassword() {

  var passwordLength = prompt("Please choose your password character length (Between 8-128 characters)")
  //Prompt if user does not enter a valid length between 8 and 128 characters
  //Included isNaN if user does not key in a numerical value

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Your password must be between 8 and 128 characters please choose again");
    var passwordLength = prompt("Invalid Password Length, Please choose a length between 8-128 characters");
    return
  }

//Confirm was used instead of Window prompts to initiate the password generation criteria to make it easier for users
  //Prompts you to decide if you want to include Lowercase characters
  var lowercaseConfirm= confirm("Include Lowercase characters? (Click OK to include them, Cancel to exclude)");
  if (lowercaseConfirm === true) {
    for (var i = 0; i < lowercaseKeys.length; i++) {
      input.push(lowercaseKeys[i]);
    }
    console.log(input)
  }

  //Prompts you to decide if you want to include Uppercase characters
// If neither upper or lower case letters are chosen the password will not include letters 
  var uppercaseConfirm = confirm("Include Uppercase characters? (Click OK to include them, Cancel to exclude)");
  if (uppercaseConfirm === true) {
    for (var i = 0; i < uppercaseKeys.length; i++) {
      input.push(uppercaseKeys[i]);
    }
    console.log(input)
  }

  //Prompts you to decide if you want to include Numerical characters
  var numericConfirm = confirm("Include Numerical characters? (Click OK to include them, Cancel to exclude)");
  if (numericConfirm === true) {
    for (var i = 0; i < numericKeys.length; i++) {
      input.push(numericKeys[i]);
    }
    console.log(input)
  }

  //Prompts you to decide if you want to include Special characters or Symbols
  var symbolsConfirm = confirm("Include Special characters or Symbols? (Click OK to include them, Cancel to exclude)");
  if (symbolsConfirm === true) {
    for (var i = 0; i < symbolsKeys.length; i++) {
      input.push(symbolsKeys[i]);
    }
    console.log(input)
  } 

  //If the user does not select anything, the alert below appears asking them to choose at least 1
  if (uppercaseConfirm === false && numericConfirm === false && lowercaseConfirm === false && symbolsConfirm === false) {
    alert("Invalid selection - You need to at least choose a single character to generate a password")
    return;
  }
  
  //
  var randomPassword = ""

  //Additional to ensure the passwordLength is an integer not a string
  const passwordconfirm = parseInt(passwordLength)

  //Math that goes in the randomization for the password
  //Inputs are put into an array and then returned using the length of the array with the global Math variable
  //Final result is displayed below in the text box
  for (var i = 0; i < passwordconfirm; i++) {
    input[
      Math.floor(Math.random() * input.length)];

    randomPassword += input[
      Math.floor(Math.random() * input.length)];
  }
  return randomPassword;
}
