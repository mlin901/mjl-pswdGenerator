

var length = 2;
console.log(typeof(length));
console.log("BLAH BLAH ");
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
  
  // Basic idea of the following is from https://stackoverflow.com/questions/52078896/javascript-prompt-validation-for-integer-input/52079923
  while (length = prompt("Input number: ")) {
    if (isNaN(length)) {
      alert("Invalid input.");
    } else if ((length < 8) || (length > 128)) {
      alert("Wrong range");
    }else {
      alert("Good");
      return parseInt(length);
    }
  }
  

  // while (((length < 8) || (length > 128)) || (typeof(length) !== "number")) {
  //   length = prompt("Enter password length, from 8 to 128 characters", "Password length");
  //   if (typeof(length) != "number") {
  //     console.log(typeof(length));
  //     alert("A number, you idiot!")
  //   } else if ((length < 8) || (length > 128)) {
  //     alert("In the correct range, you idiot!");
  //   }
  // }

  // var lowercase = prompt("Do you want lowercase characters in the password?", "Yes or No");
  // var uppercase = prompt("Do you want uppercase characters in the password?", "Yes or No");
  // var numeric = prompt("Do you want numeric characters in the password?", "Yes or No");
  // var numeric = prompt("Do you want special characters in the password?", "Yes or No");
  
  return "blah...";
}

// ****Password generator - FUNCTION** (4)
function generatePassword(x) {
  console.log("********");
  return x;
}

