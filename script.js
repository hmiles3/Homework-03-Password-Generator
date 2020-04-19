// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword() {
  var randomChar = ""
  var upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowerString = "abcdefghijklmnopqrstuvwxyz"
  var numString = "0123456789"
  var specialString = "@%+!#$^?:,(){}[]~-_.&*"
  var passLength = prompt("How many characters should the password contain?")
  while (passLength < 8 || passLength > 128) {
    passLength = prompt("Please provide a length between 8 and 128")
  }
  var upperCase = confirm("Do you want to include upper case letters?")
  var lowerCase = confirm("Do you want to include lower case letters?")
  var num = confirm("Do you want to include numbers?")
  var specialChar = confirm("Do you want to include special characters?")

  for (i = 0; i < upperString.length; i++) {
    if (upperCase === true){
      randomChar += upperString[i]
    }
  }
  for (i = 0; i < lowerString.length; i++) {
    if (lowerCase === true){
      randomChar += lowerString[i]
    }
  }
  for (i = 0; i < numString.length; i++) {
    if (num === true){
      randomChar += numString[i]
    }
  }
  for (i = 0; i < specialString.length; i++) {
    if (specialChar === true){
      randomChar += specialString[i]
    }
  }
var newPass = ""
    for (i = 0; i < passLength; i++){
      var newChar = Math.floor(Math.random()*randomChar.length+1);
      newPass += randomChar.charAt(newChar)
  }
  return newPass
}
generateBtn.addEventListener("click", writePassword);