// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

var lower = 'qwertyuiopasdfghjklzxcvbnm'.split('');
var upper = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('');
var numb = '1234567890'.split('');
var spec = '!@#$%^&*()-=_+'.split('');
function generatePassword() {
    var length = prompt('How many digits would you like your password to be?');
    console.log(length)
    if (length < 8 || length > 128) {
        alert("You did not select a valid length, please try again.");
        generatePassword();
    } else {
        var lowerCase = confirm('Would you like your password to include lower case letters?');
        var upperCase = confirm('Would you like your password to contain upper case letters?');
        var numbers = confirm('Would you like your password to contain numbres?')
        var special = confirm('Would you like your password to contian special didgets?')
    }
    if (!lowerCase && !upperCase && !numbers && !special) {
        alert("You must select yes on at least one of the previous questions")
        generatePassword()
    } else {
        assemblePassword(length, lowerCase, upperCase, numbers, special)        
    }
}

function assemblePassword(length, lowerCase, upperCase, numbers, special) {
}