

console.log(typeof(length));
var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numerals = "0123456789";
var specialCharacters =  " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var charSets = [lowerCharacters, upperCharacters, numerals, specialCharacters];
// console.log(specialCharacters);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input - FUNCTION (2)
function writePassword() {
  var requirements = gatherRequirements();
  var password = generatePassword(requirements, charSets);
  
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
    console.log(length + " 0000000000");
    if (length == null) {
      return "Operation cancelled."
    } else if (isNaN(length)) {
      alert("Invalid input. Enter a number from 8 to 128.");
    } else if ((length < 8) || (length > 128)) {
      alert("Invalid length. Must be from 8 to 128");
    }
  }
  
  function yesNoQuestion (option) {
    var answer = "neither";
    while ((answer !== "yes") && (answer != "no")) {
      answer = prompt("Do you want " + option + " characters in the password?", "Yes or No");
      if (answer == null) {
        return null;
      } else {
        answer = answer.toLowerCase();
        if ((answer != "yes") && (answer != "no")) {
          alert("Invalid input. Enter Yes or No.");
        } else {
          return answer;
        }
      }
    }

  }
  
  lowercase = yesNoQuestion(lowercase);
  if (lowercase == null) {
    return "Operation cancelled"
  } 
  uppercase = yesNoQuestion(uppercase);
  if (uppercase == null) {
    return "Operation cancelled"
  } 
  numeric = yesNoQuestion(numeric);
  if (numeric == null) {
    return "Operation cancelled"
  } 
  special = yesNoQuestion(special);
  if (special == null) {
    return "Operation cancelled"
  } 

  var requirementsA = [length, lowercase, uppercase, numeric, special]
  return requirementsA;
}

// ****Password generator - FUNCTION** (4)
function generatePassword(settings, characterSets) {
  console.log("********>>>>" + settings);
  var newset = [];
  var pswd = [];
  if (settings[1] == "yes") {
    newset.push(characterSets[0])
  } 
  if (settings[2] == "yes") {
    newset.push(characterSets[1])
  } 
  if (settings[3] == "yes") {
    newset.push(characterSets[2])
  } 
  if (settings[4] == "yes") {
    newset.push(characterSets[3])
  } 

  console.log(newset.length + "xxxxxx");

  // Generate password character-by-character
  for (i = 0; i < settings[0]; i++) {
    var set = Math.floor(Math.random() * newset.length);
    character = newset[set][Math.floor(Math.random() * newset[set].length)];
    pswd.push(character);
    
    // Then generate number from ? to ? to determine which character in chosen set
  }

   return pswd.join("");
}

