// Randomize queue
var randomNumber = function (min, max) {
  var result = Math.floor(Math.random() * (max - min));
  return result;
};
var generatePassword = function() {
  // Group of characters
  var characters = {
    specialChar: " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
    alphabet: "abcdefghijklmnopqrstuvwxyz",
    alphabetCapitals: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789"
  };
  
//   var totalSelection = characters.alphabet +
//                        characters.alphabetCapitals+
//                        characters.numbers+
//                        characters.specialChar;
// // debugger;
//   console.log(totalSelection);

  
  // var pattern = randomNumber(selection.length - totalSelection.length);

var desire = "";
while (desire ! "Y" || desire === null) {
  desire = prompt("Would you like to add small latin letters to your password?");

}

  

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  return password;
}
generatePassword();
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
