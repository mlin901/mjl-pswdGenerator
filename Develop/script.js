//Variables for character sets
var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numerals = "0123456789";
var specialCharacters =  " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
//Array of character sets for the user to choose
var charSets = [lowerCharacters, upperCharacters, numerals, specialCharacters];

// Variable/querySelecter for button (used by event listener below)
var generateBtn = document.querySelector("#generate");

// Function (called by event listener) that makes calls necessary to gather user
// input, generate the password, and write it to the #password element
function writePassword() {
  var passwordText = document.querySelector("#password"); // Get the HTML element to add password to
  var requirements = gatherRequirements(); //Call function to prompt user for settings
  // If the user hasn't selected anything (which isn't really possible)...
  if (requirements == null) {
    passwordText.value = "Operation cancelled"
  // Else, call the password generator function, passing the user's selections (length and
  // selected character set selections) along with the array all avialable character sets
  // (not just user-chosen sets)
  } else {
    var password = generatePassword(requirements, charSets); 
    passwordText.value = password; 
  }
}

// Event listener for the generate button. Passing an anonymous function prevents the button
// from being clicked as soon as the page is loaded (a tip from one of the TAs). 
// This function is called by the gatherRequirements function.
generateBtn.addEventListener("click", function () {writePassword();});

// Function for yes/no questions (i.e., types of characters to include).
// It accepts a character set type, prompts for yes or no, and then returns
// a yes or no answer, or returns null if the user presses Cancel.
function yesNoQuestion (option) {
  var answer = "neither";
  while ((answer !== "yes") && (answer != "no")) {
    // Prompt for character set type
    answer = prompt("Do you want " + option + " characters in the password?", "Yes or No");
    // If user presses the Cancel button...
    if (answer == null) {
      return null;
    // If the user didn't press the Cancel button...
    } else {
      answer = answer.toLowerCase();
      // Make sure the answer is valid
      if ((answer != "yes") && (answer != "no")) {
        alert("Invalid input. Enter Yes or No.");
      } else {
        return answer;
      }
    }
  }

}
// This function prompts for user selections and processes them. It doesn't accept
// a value, but it returns an array of user selections.
function gatherRequirements() {
  var length = 1;
  var lowercase = "lowercase";
  var uppercase = "uppercase";
  var numeric = "numeric";
  var special = "special";
  var types = [lowercase, uppercase, numeric, special];

  // This processes the first prompt, the one that asks for the number of characters.
  // The basic idea for this is from https://stackoverflow.com/questions/52078896/javascript-prompt-validation-for-integer-input/52079923
  while (((length < 8) || (length > 128)) || (isNaN(length))) {
    // Prompt for length
    length = prompt("Input a number, from 8 to 128, which will determine the length of the password.")
    // If the user presses Cancel, return null
    if (length == null) {
      return null;
    // If user enters a non-number...
    } else if (isNaN(length)) {
      alert("Invalid input. Enter a number from 8 to 128.");
    // If user enters a number that isn't in the specifed range...
    } else if ((length < 8) || (length > 128)) {
      alert("Invalid length. Enter a number from 8 to 128");
    } 
  }
  // Create an array for user choices and call yesNoQuestion function for each 
  // character set 
  var requirementsA = [];
  for (let index = 0; index < types.length; index++) {
    requirementsA[index] = yesNoQuestion(types[index]);
    if (requirementsA[index] == null) {
      return null;
    }  
  }
  
  // Add length (from first prompt) as the first item in the array of user choices
  requirementsA.unshift(length);
  // Return an array with all the user's choices
  return requirementsA;
} 

// Function to generate the password from user choices and character sets. This 
// accepts an array of user settings and an array of all available character sets
// (not just the character sets chosen by the user). 
// It uses user seletions to generate a password and then returns the password. 
function generatePassword(settings, characterSets) {
  var newset = []; // For user-selected character sets
  var pswd = []; // For the generated password

  // Build up array of user-selected character sets.
  // Starts at 1 because the first element (0) of the array is the 
  // user-selected length, whioch isn't relevant here.
  for (i = 1; i < settings.length; i++){   
    var newI = i - 1;
    if (settings[i] == "yes") {
      newset.push(characterSets[newI]);
    }
  }

  // If the user answered "yes" to any of the prompts for types of characters...
  if (newset.length){
    // Generate password character-by-character from selected character sets.
    // settings[0] is the user-selected length.
    for (i = 0; i < settings[0]; i++) {
      // Randomly determine which of the selected character sets the next character
      // will be chosen from
      var set = Math.floor(Math.random() * newset.length);
      // Randomly choose a character from the character set chosen above
      character = newset[set][Math.floor(Math.random() * newset[set].length)];
      // Add the randomly selected character to the array for the password
      pswd.push(character);
    }
    // If the user answered "no" to all prompts for types of characters...
  } else {
    return "All character options rejected. No password could be generated.";
  }
  // The join method creates a string from the array
  return pswd.join("");
}

