// String Randomizer
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
  

// debugger;
  var totalSelection = "";

  while (totalSelection.length < 36) {
    window.alert("Press OK or Cancel to the following options. You have to choose at least two of them!");
    
    var desire = window.confirm("Please confirm if you like to add small latin letters to your password?");
    if (desire) {
      totalSelection = totalSelection + characters.alphabet;
    } 

    desire = window.confirm("Would you like to add capital latin letters to your password?");
    if (desire) {
      totalSelection = totalSelection + characters.alphabetCapitals;
    } 
    
    desire = window.confirm("Would you like to add numbers to your password?");
    if (desire) {
      totalSelection = totalSelection + characters.numbers;
    } 

    desire = window.confirm("Would you like to special character letters to your password?");
    if (desire) {
      totalSelection = totalSelection + characters.specialChar;
    } 
    
    var realLength = window.prompt("Enter a number between 8 and 128 for the length of your password: ");
    while (parseInt(realLength) < 8 || parseInt(realLength) >128) {
      realLength = window.prompt("Please enter a valid number between 8 and 128 for the length of your password: ");
    }

    if (totalSelection.length < 36) {
        alert("Sorry! You have to try at least two options");
        totalSelection = "";      
    }
  }

  var finalPassword = "";
  for (var i=0; i < parseInt(realLength); i++) {
// debugger;      
    finalPassword += totalSelection[randomNumber(0, totalSelection.length)];
    console.log(finalPassword[i]);
  } 
  // console.log(finalPassword);
 
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
