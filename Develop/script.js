// Assignment Code
var generateBtn = document.querySelector("#generate");

var optionsYN = ["Y", "N"]

//Window to initiate the password generation criteria
//First window decides the length of the password between 8-128 characters
var passwordLength = window.prompt("Please key in a password character length (Between 8-128 characters)")
//Second and Third window allows you to decide if you want to include Upper and Lower Case characters
// Yes / No to agree or disagree on including these characters this applies to further criteria below
// If neither are chosen the password will not include letters
var passwordLowercase = window.prompt("Include Lowercase characters? (Y/N)")
var passwordUppercase = window.prompt("Include Uppercase characters? (Y/N)")
//Fourth window allows you to choose if you want to include numerics
var passwordNumerics = window.prompt("Include Numerical characters? (Y/N)")
var passwordSpecial = window.prompt("Include Numerical characters? (Y/N)")
var passwordLowercase = window.prompt("")
var passwordLowercase = window.prompt("")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
