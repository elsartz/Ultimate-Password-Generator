// String Randomizer
var randomNumber = function (min, max) {
  var result = Math.floor(Math.random() * (max - min));
  return result;
};

// Main function
var generatePassword = function() {
  // Group of characters
  var characters = {
    specialChar: " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
    alphabet: "abcdefghijklmnopqrstuvwxyz",
    alphabetCapitals: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789"
  };
  
// Loop with prompts for password criteria
  var totalSelection = "";

  while (totalSelection.length < 36) {
    window.alert("Press OK or Cancel to the following options. You have to choose at least two of them!");
    // add to password small latin letters
    var desire = window.confirm("Please confirm if you like to add small latin letters to your password?");
    if (desire) {
      totalSelection = totalSelection + characters.alphabet;
    } 
    // add to password CAPITAL letters
    desire = window.confirm("Would you like to add capital latin letters to your password?");
    if (desire) {
      totalSelection = totalSelection + characters.alphabetCapitals;
    } 
    // add to password numbers
    desire = window.confirm("Would you like to add numbers to your password?");
    if (desire) {
      totalSelection = totalSelection + characters.numbers;
    } 
    // add to password special characters
    desire = window.confirm("Would you like to special character letters to your password?");
    if (desire) {
      // plus the missing character
      var allSpecial = characters.specialChar.concat('"');
     
      totalSelection = totalSelection + allSpecial;
    } 
    // Definition of password length
    var realLength = window.prompt("Enter a number between 8 and 128 for the length of your password: ");
    while (parseInt(realLength) < 8 || parseInt(realLength) >128) {
      realLength = window.prompt("Please enter a valid number between 8 and 128 for the length of your password: ");
    }
    // for my opinion the smallest diversity of characters should be ... two groups of characters minimum
    if (totalSelection.length < 36) {
        alert("Sorry! You have to try at least two options");
        totalSelection = "";      
    }
  }
  // time to create the password with a for loop
  var finalPassword = "";
  for (var i=0; i < parseInt(realLength); i++) {    
    finalPassword += totalSelection[randomNumber(0, totalSelection.length)];
  } 
   
  return finalPassword;  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  return passwordText.value;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
