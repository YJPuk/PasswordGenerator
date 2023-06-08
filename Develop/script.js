// Assignment Code
var generateBtn = document.querySelector("#generate");

//Window to initiate the password generation criteria
//First window decides the length of the password between 8-128 characters
var passwordLength = confirm("Please choose your password character length (Between 8-128 characters)")
//Second and Third window allows you to decide if you want to include Upper and Lower Case characters
// Yes / No to agree or disagree on including these characters this applies to further criteria below
// If neither are chosen the password will not include letters
var lowercase = confirm("Include Lowercase characters? (Click OK to include them, Cancel to exclude)")
var upercase = confirm("Include Uppercase characters? (Click OK to include them, Cancel to exclude)")
//Fourth window allows you to choose if you want to include numerics
var numerics = confirm("Include Numerical characters? (Click OK to include them, Cancel to exclude)")
//Fifth window allows you to choose if you want to include numerics
var symbols = confirm("Include Special characters / Symbols? (Click OK to include them, Cancel to exclude)")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
