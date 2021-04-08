

// var length = 128;
// var lowercase = true;
// var uppercase = true;
// var numeric = true;
var special = true;
// var requirements = [length, ]
var specialCharacters =  " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
console.log(specialCharacters);

// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input - FUNCTION (2)
function writePassword() {
  var requirements = gatherRequirements();
  var password = generatePassword(requirements);
  
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add EVENT LISTENER to generate button - START HERE (1)
generateBtn.addEventListener("click", writePassword);


// ***User selection gatherer - FUNCTION** (3)
function gatherRequirements() {
  var length = prompt("Enter password length, from 8 to 128 characters", "Password length");
  var lowercase = prompt("Do you want lowercase characters in the password?", "Yes or No");
  var uppercase = prompt("Do you want uppercase characters in the password?", "Yes or No");
  var numeric = prompt("Do you want numeric characters in the password?", "Yes or No");
  var numeric = prompt("Do you want special characters in the password?", "Yes or No");
  return "blah...";
}

// ****Password generator - FUNCTION** (4)
function generatePassword(x) {
  console.log("********");
  return x;
}

