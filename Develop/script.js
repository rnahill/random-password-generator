// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {


  var chooseLength = window.prompt("What length password would you like?");
  
  if (chooseLength <= 8 || chooseLength >= 128) {
    window.alert("Number not valid! Please choose a number between 1 and 128.");
    return;
  }

  var chooseUpperCase = window.confirm("Click OK to include uppercase letters. Click cancel to not include uppercase letters.");
  var chooseLowerCase = window.confirm("Click OK to include lowercase letters. Click cancel to not include lowercase letters.");
  var chooseNumbers = window.confirm("Click OK to include numbers. Click cancel to not include numbers.");
  var chooseSpecialChar = window.confirm("Click OK to include special characters. Click cancel to not include special characters.");
  
  var specialChar = [ "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "`", "{", "|", "}", "~", "]", "["]
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var chosenCriteria = [];

  if(chooseUpperCase) {
    chosenCriteria = chosenCriteria.concat(upperLetters);
    
  }

  if(chooseLowerCase) {
    chosenCriteria = chosenCriteria.concat(lowerLetters);

  }

  if(chooseNumbers) {
    chosenCriteria = chosenCriteria.concat(numbers);

  }

  if(chooseSpecialChar) {
    chosenCriteria = chosenCriteria.concat(specialChar);
  
  }

   var password = "";

   for (var i=0; i<chooseLength; i++ ) {
   var randomChar = chosenCriteria[Math.floor(Math.random() * chosenCriteria.length)];
    password += randomChar;

  }
  return password;

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 