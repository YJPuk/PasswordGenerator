// Assignment Code
var generateBtn = document.querySelector("#generate");

//Window to initiate the password generation criteria


//First window decides the length of the password between 8-128 characters
var passwordLength = prompt("Please choose your password character length (Between 8-128 characters)")
//Second and Third window allows you to decide if you want to include Upper and Lower Case characters
// Yes / No to agree or disagree on including these characters this applies to further criteria below
// If neither are chosen the password will not include letters
var lowercase = confirm("Include Lowercase characters? (Click OK to include them, Cancel to exclude)")
var upercase = confirm("Include Uppercase characters? (Click OK to include them, Cancel to exclude)")
//Fourth window allows you to choose if you want to include numerics
var numeric = confirm("Include Numerical characters? (Click OK to include them, Cancel to exclude)")
//Fifth window allows you to choose if you want to include numerics
var symbols = confirm("Include Special characters / Symbols? (Click OK to include them, Cancel to exclude)")

//Password length selection listed below and prompt if user does not enter a valid length between 8 and 128 characters
if (passwordLength < 8 || passwordLength > 128) {
  alert("Your password must be between 8 and 128 characters please choose again");
  var passwordLength = prompt("Please choose your password character length (Between 8-128 characters)");
}

// Password variables listed below
var uppercaseKeys = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
var lowercaseKeys ="abcdefghijklmnopqrstuvwxyz";
var symbolsKeys ="!@#$%^&*()?.<\>|=+:;,[-_]"
var numericKeys ="0123456789"
var multipleKeys =[];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Event Listener to generate button, Call to Action
generateBtn.addEventListener("click", function () { writePassword(getPassword()) });
