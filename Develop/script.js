

console.log(typeof(length));
console.log("BLAH BLAH ");
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
  var length = 1;
  var lowercase = "lowercase";
  var uppercase = "uppercase";
  var numeric = "mumeric";
  var special = "special";
  
  // ***need to add Cancel/null possibility
  // Basic idea of the following is from https://stackoverflow.com/questions/52078896/javascript-prompt-validation-for-integer-input/52079923
  while (((length < 8) || (length > 128)) || (isNaN(length))) {
    length = prompt("Input a number, from 8 to 128, which will determine the length of the password.")
    if (isNaN(length)) {
      alert("Invalid input. Enter a number from 8 to 128.");
    } else if ((length < 8) || (length > 128)) {
      alert("Invalid length. Must be from 8 to 128");
    }
  }
  console.log("This is length: " + length);  //  ****
  
  function yesNoQuestion (option) {
    var answer = "neither";
    while ((answer !== "yes") && (answer != "no")) {
      answer = prompt("Do you want " + option + " characters in the password?", "Yes or No");
      answer = answer.toLowerCase();
      if ((answer != "yes") && (answer != "no")) {
        alert("Invalid input. Enter Yes or No.");
      }
    }
    console.log("This is the answer for " + option + ":" + answer);  //  ****
    return answer;
  }
  
  lowercase = yesNoQuestion(lowercase);
  uppercase = yesNoQuestion(uppercase);
  numeric = yesNoQuestion(numeric);
  special = yesNoQuestion(special);

  var requirementsA = [length, lowercase, uppercase, numeric, special]
  return requirementsA;
}

// ****Password generator - FUNCTION** (4)
function generatePassword(x) {
  console.log("********");
  return x;
}

