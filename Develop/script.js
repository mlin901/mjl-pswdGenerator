
//Character set variables
var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numerals = "0123456789";
var specialCharacters =  " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
//Initial array of character sets
var charSets = [lowerCharacters, upperCharacters, numerals, specialCharacters];
// Variable for button (for event listener below)
var generateBtn = document.querySelector("#generate");

// Function called by event listener to write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password"); // Get HTML element to add password to
  var requirements = gatherRequirements(); //Call function to prompt user for settings
  // If the user hasn't selected any class or character for the password...
  if (requirements == null) {
    passwordText.value = "Operation cancelled"
  // Else, call the password generator function, passing the user's selected character types and
  // the array of possible character sets (all possible character sets--not just user-chosen sets)
  } else {
    var password = generatePassword(requirements, charSets); 
    passwordText.value = password; 
  }
}

// Event listener for the generate button
generateBtn.addEventListener("click", function () {writePassword();});

// Function for yes/no questions (kinds of characters to include)
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
// Prompt/process user selections
function gatherRequirements() {
  var length = 1;
  var lowercase = "lowercase";
  var uppercase = "uppercase";
  var numeric = "numeric";
  var special = "special";
  var types = [lowercase, uppercase, numeric, special];

  // Process first prompt, the one that asks for the number of characters
  // Basic idea of the following is from https://stackoverflow.com/questions/52078896/javascript-prompt-validation-for-integer-input/52079923
  while (((length < 8) || (length > 128)) || (isNaN(length))) {
    length = prompt("Input a number, from 8 to 128, which will determine the length of the password.")
    if (length == null) {
      return null;
    } else if (isNaN(length)) {
      alert("Invalid input. Enter a number from 8 to 128.");
    } else if ((length < 8) || (length > 128)) {
      alert("Invalid length. Must be from 8 to 128");
    } 
  }
  var requirementsA = [];
  for (let index = 0; index < types.length; index++) {
    requirementsA[index] = yesNoQuestion(types[index]);
    if (requirementsA[index] == null) {
      return null;
    }  
  }
  
  requirementsA.unshift(length);
  return requirementsA;
} 

// Password generator 
function generatePassword(settings, characterSets) {
  var newset = [];
  var pswd = [];

  // Build up array of user-selected character sets
  for (i = 1; i < settings.length; i++){   
    var newI = i - 1;
    if (settings[i] == "yes") {
      newset.push(characterSets[newI]);
    }
  }

  // If the user answered "yes" to any of the prompts for types of characters...
  if (newset.length){
    // Generate password character-by-character from selected character sets
    for (i = 0; i < settings[0]; i++) {
      // Randomly determine which of the selected character sets the next character
      // will be chosen from
      var set = Math.floor(Math.random() * newset.length);
      // Randomly choose a character from the character set chosen above
      character = newset[set][Math.floor(Math.random() * newset[set].length)];
      pswd.push(character);
      // Then generate number from ? to ? to determine which character in chosen set
    }
    // If the user answered "no" to all prompts for types of characters...
  } else {
    return "All character options rejected. No password could be generated.";
  }

   return pswd.join("");
}

