// Group of characters



  var characters = {
    specialChar: " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
    alphabet: "abcdefghijklmnopqrstuvwxyz",
    alphabetCapitals: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789"
  };
  var randomNumber = function (min, max) {
    var result = Math.floor(Math.random() * (max - min));
    return result;
  };
  var totalSelection = characters.alphabet +
                       characters.alphabetCapitals+
                       characters.numbers+
                       characters.specialChar;
// debugger;
  console.log(totalSelection);

  
  // var pattern = randomNumber(selection.length - totalSelection.length);




  var generatePassword = function() {

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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
