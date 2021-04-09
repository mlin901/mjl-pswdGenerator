

var length = 2;
console.log(typeof(length));
console.log("BLAH BLAH ");
var lowercase = true;
var uppercase = true;
var numeric = true;
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
  var requirementsA = [length, lowercase, uppercase, numeric, special]
  
  // ***need to add Cancel/nulll possibility
  // Basic idea of the following is from https://stackoverflow.com/questions/52078896/javascript-prompt-validation-for-integer-input/52079923
  while (((length < 8) || (length > 128)) || (isNaN(length))) {
    length = prompt("Input a number, from 8 to 128, which will determine the length of the password.")
    if (isNaN(length)) {
      alert("Invalid input. Enter a number from 8 to 128.");
    } else if ((length < 8) || (length > 128)) {
      alert("Invalid length. Must be from 8 to 128");
    // }else {
    //   alert("Good");
      // length = parseInt(length);
      // return;
    }
  }
  
  // ***need to add Cancel/nulll possibility
  while ((lowercase !== "yes") && (lowercase != "no")) {
    lowercase = prompt("Do you want lowercase characters in the password?", "Yes or No");
    lowercase = lowercase.toLowerCase();
    if ((lowercase != "yes") && (lowercase != "no")) {
      alert("Invalid input. Enter Yes or No.");
    }
  }
  // var uppercase = prompt("Do you want uppercase characters in the password?", "Yes or No");
  // var numeric = prompt("Do you want numeric characters in the password?", "Yes or No");
  // var special = prompt("Do you want special characters in the password?", "Yes or No");
  
  return requirementsA;
}

// ****Password generator - FUNCTION** (4)
function generatePassword(x) {
  console.log("********");
  return x;
}

