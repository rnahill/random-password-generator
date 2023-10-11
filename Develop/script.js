// Assignment Code
var generateBtn = document.querySelector("#generate");

// create function
// give prompts for different password criteria:
//  prompt for length of password between 8-128 characters
//  confirm whether or not to use uppercase, lowercase, numbers, and/or, special characters
// random password generated
// display password


function generatePassword() {

  var chooseLength = window.prompt("What length password would you like?");
  var chooseUpperCase = window.confirm("Click OK to include uppercase letters. Click cancel to not include uppercase letters.");
  var chooseLowerCase = window.confirm("Click OK to include lowercase letters. Click cancel to not include lowercase letters.");
  var chooseNumbers = window.confirm("Click OK to include numbers. Click cancel to not include numbers.");
  var chooseSpecialChar = window.confirm("Click OK to include special characters. Click cancel to not include special characters.");
  var specialChar = [ "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "`", "{", "|", "}", "~" ]
  // [ ] " \ all left out

  // length
  if (chooseLength > 0 && chooseLength < 129) {
      console.log(chooseLength);
  
  }
  
  else {
      window.alert("Number not valid! Please choose a number between 1 and 128.");
    
  }

  // uppercase
  if(chooseUpperCase) {
    
  }

//  lowercase
  if(chooseLowerCase) {

  }

  // numbers
  if(chooseNumbers) {

  }

//  special characters
  if(chooseSpecialChar) {
    // for loop here
  
  }


}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
