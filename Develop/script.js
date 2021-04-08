// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var requirements = gatherRequirements();
  var password = generatePassword(requirements);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// *******User selection gatherer
function gatherRequirements() {
  var input = prompt("A banner with the strange device...", "What was it?");
  return input;
}

// ****Password generator
function generatePassword(x) {
  console.log("********");
  return x;
}

